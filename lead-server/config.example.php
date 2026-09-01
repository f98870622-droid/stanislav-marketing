<?php
/**
 * Приём заявок. Загрузите папку на хостинг в РФ (Timeweb, Beget, REG.RU, Selectel).
 * Скопируйте этот файл в config.php и заполните.
 */
return [
    // Сайты, с которых можно слать форму
    'allowed_origins' => [
        'https://f98870622-droid.github.io',
        'http://127.0.0.1:8766',
        'http://localhost:8766',
    ],

    // Почта на Яндексе или Mail.ru — ящик в РФ
    'mail_to' => 'ВАШ_ЯЩИК@yandex.ru',
    'mail_from' => 'noreply@ВАШ_ДОМЕН.ru',

    // Необязательно: уведомление после записи в РФ. Токен не кладите в GitHub Pages.
    'telegram_bot_token' => '',
    'telegram_chat_id' => '',
];
