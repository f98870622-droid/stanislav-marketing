from PIL import Image, ImageDraw, ImageFilter
import numpy as np

blank_path = r"C:\Users\Станислав\.cursor\projects\d-Cursor-sites-stanislav-marketing\assets\iphone17-hand-blank-screen.png"
shot_path = r"D:\Cursor sites\stanislav-marketing\assets\mads-iphone-screen.png"
out_path = r"D:\Cursor sites\stanislav-marketing\assets\iphone17-mads-hero.png"

SCALE = 2

mock = Image.open(blank_path).convert("RGBA")
shot = Image.open(shot_path).convert("RGBA")
mw, mh = mock.size
mock_hi = mock.resize((mw * SCALE, mh * SCALE), Image.Resampling.LANCZOS)


def find_coeffs(src, dst):
    matrix = []
    for s, d in zip(src, dst):
        matrix.append([d[0], d[1], 1, 0, 0, 0, -s[0] * d[0], -s[0] * d[1]])
        matrix.append([0, 0, 0, d[0], d[1], 1, -s[1] * d[0], -s[1] * d[1]])
    A = np.array(matrix, dtype=np.float64)
    B = np.array(src, dtype=np.float64).reshape(8)
    res = np.linalg.lstsq(A, B, rcond=None)[0]
    return tuple(res.tolist())


def rounded_quad_points(corners, radii, n_arc=20):
    pts = [np.array(c, dtype=np.float64) for c in corners]
    path = []
    for i in range(4):
        r = float(radii[i])
        prev = pts[(i - 1) % 4]
        cur = pts[i]
        nxt = pts[(i + 1) % 4]
        u = prev - cur
        v = nxt - cur
        u /= np.linalg.norm(u)
        v /= np.linalg.norm(v)
        start = cur + u * r
        end = cur + v * r
        bis = u + v
        bis /= np.linalg.norm(bis) + 1e-9
        ang = np.arccos(np.clip(np.dot(u, v), -1, 1))
        center = cur + bis * (r / max(np.sin(ang / 2), 1e-4))
        a0 = np.arctan2(start[1] - center[1], start[0] - center[0])
        a1 = np.arctan2(end[1] - center[1], end[0] - center[0])
        da = (a1 - a0 + np.pi) % (2 * np.pi) - np.pi
        for k in range(n_arc + 1):
            a = a0 + da * (k / n_arc)
            path.append((center[0] + r * np.cos(a), center[1] + r * np.sin(a)))
    return path


sw, sh = shot.size
src = [(0, 0), (sw, 0), (sw, sh), (0, sh)]
dst = [(300, 242), (638, 246), (762, 1112), (350, 1124)]
dst_hi = [(x * SCALE, y * SCALE) for x, y in dst]
radii_hi = [36 * SCALE, 34 * SCALE, 58 * SCALE, 60 * SCALE]

shot_rgb = Image.new("RGB", (sw, sh), (246, 246, 245))
shot_rgb.paste(shot.convert("RGB"), (0, 0))

coeffs = find_coeffs(src, dst_hi)
warped = shot_rgb.transform(
    mock_hi.size, Image.Transform.PERSPECTIVE, coeffs, Image.Resampling.BICUBIC
)

glass = Image.new("L", mock_hi.size, 0)
ImageDraw.Draw(glass).polygon(rounded_quad_points(dst_hi, radii_hi), fill=255)
glass = glass.filter(ImageFilter.GaussianBlur(0.45))
warped_rgba = warped.convert("RGBA")
warped_rgba.putalpha(glass)
warped_rgba = warped_rgba.resize((mw, mh), Image.Resampling.LANCZOS)

canvas = mock.copy()
canvas.paste(warped_rgba, (0, 0), warped_rgba)

mock_np = np.array(mock).astype(np.float32)
out_np = np.array(canvas).astype(np.float32)
gray = mock_np[:, :, :3].mean(axis=2)
chroma = mock_np[:, :, :3].max(axis=2) - mock_np[:, :, :3].min(axis=2)
r = mock_np[:, :, 0]
bch = mock_np[:, :, 2]
metal = (gray > 105) & (chroma < 42)
skin = (r > 82) & (r > bch + 16) & (gray > 40)
keep = metal | skin
out_np[:, :, :3] = np.where(keep[:, :, None], mock_np[:, :, :3], out_np[:, :, :3])

yy, xx = np.ogrid[:mh, :mw]
island = ((xx - 478) / 56.0) ** 2 + ((yy - 258) / 16.0) ** 2 <= 1.0
out_np[:, :, :3] = np.where(island[:, :, None], mock_np[:, :, :3], out_np[:, :, :3])

ui = (np.array(warped_rgba)[:, :, 3] > 28) & (~keep) & (~island)
highlight = np.clip(mock_np[:, :, :3] - 6, 0, 80) * 0.14
out_np[:, :, :3] = np.where(
    ui[:, :, None],
    np.clip(out_np[:, :, :3] * 0.985 + highlight, 0, 255),
    out_np[:, :, :3],
)
out_np[:, :, 3] = 255

out = Image.fromarray(np.clip(out_np, 0, 255).astype(np.uint8), "RGBA").convert("RGB")
out.save(out_path, quality=95)

print("saved", out.size, out_path)
