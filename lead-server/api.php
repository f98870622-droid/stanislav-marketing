<?php
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(503);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'config']);
    exit;
}

$config = require $configFile;

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = $config['allowed_origins'] ?? [];
if ($origin !== '' && in_array($origin, $allowed, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

if ($origin !== '' && !in_array($origin, $allowed, true)) {
    http_response_code(403);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'origin']);
    exit;
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

header('Content-Type: application/json; charset=utf-8');

if (!empty($data['company'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$contact = trim((string) ($data['contact'] ?? ''));
$social = trim((string) ($data['social'] ?? 'telegram'));
$source = trim((string) ($data['source'] ?? ''));
$consent = !empty($data['consent']);

if ($name === '' || $contact === '' || !$consent) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'fields']);
    exit;
}

if (mb_strlen($name) > 120 || mb_strlen($contact) > 240) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'length']);
    exit;
}

if (!in_array($social, ['telegram', 'vk'], true)) {
    $social = 'telegram';
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir) && !mkdir($dataDir, 0700, true) && !is_dir($dataDir)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'storage']);
    exit;
}

$rateFile = $dataDir . '/rate-' . hash('sha256', $ip) . '.txt';
$now = time();
$hits = [];
if (is_file($rateFile)) {
    $hits = array_filter(array_map('intval', file($rateFile, FILE_IGNORE_NEW_LINES) ?: []), static fn ($t) => $t > $now - 600);
}
$hits[] = $now;
file_put_contents($rateFile, implode("\n", $hits) . "\n", LOCK_EX);
if (count($hits) > 8) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'rate']);
    exit;
}

$record = [
    'id' => bin2hex(random_bytes(8)),
    'created_at' => gmdate('c'),
    'timezone' => 'Europe/Moscow',
    'name' => $name,
    'contact' => $contact,
    'social' => $social,
    'source' => $source,
    'consent' => true,
    'ip' => $ip,
    'ua' => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 300),
    'stored_in' => 'RU-hosting',
];

$line = json_encode($record, JSON_UNESCAPED_UNICODE) . "\n";
$written = file_put_contents($dataDir . '/leads.jsonl', $line, FILE_APPEND | LOCK_EX);
if ($written === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'write']);
    exit;
}

$summary = "Новая заявка\nИмя: {$name}\n"
    . ($social === 'vk' ? 'VK' : 'Telegram') . ": {$contact}\n"
    . "Страница: {$source}\n"
    . "id: {$record['id']}";

$mailTo = $config['mail_to'] ?? '';
if (is_string($mailTo) && str_contains($mailTo, '@') && !str_contains($mailTo, 'ВАШ_')) {
    $headers = 'Content-Type: text/plain; charset=UTF-8';
    $from = $config['mail_from'] ?? '';
    if (is_string($from) && str_contains($from, '@') && !str_contains($from, 'ВАШ_')) {
        $headers .= "\r\nFrom: " . $from;
    }
    @mail($mailTo, '=?UTF-8?B?' . base64_encode('Заявка с сайта Станислава') . '?=', $summary, $headers);
}

$token = trim((string) ($config['telegram_bot_token'] ?? ''));
$chatId = trim((string) ($config['telegram_chat_id'] ?? ''));
if ($token !== '' && $chatId !== '') {
    $tg = [
        'chat_id' => $chatId,
        'text' => $summary,
    ];
    $ctx = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => json_encode($tg),
            'timeout' => 8,
        ],
    ]);
    @file_get_contents('https://api.telegram.org/bot' . $token . '/sendMessage', false, $ctx);
}

echo json_encode(['ok' => true, 'id' => $record['id']]);
