from PIL import Image, ImageDraw
import math

SIZE = 1000
CENTER = SIZE // 2
BORDER_WIDTH = 36
INNER_R = 380
OUTER_R = INNER_R + BORDER_WIDTH

img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
draw = ImageDraw.Draw(img)

# Yellow border circle
draw.ellipse(
    [CENTER - OUTER_R, CENTER - OUTER_R, CENTER + OUTER_R, CENTER + OUTER_R],
    fill="#FFD700"
)

# Dark green inner circle
draw.ellipse(
    [CENTER - INNER_R, CENTER - INNER_R, CENTER + INNER_R, CENTER + INNER_R],
    fill="#0D1F16"
)

# Helper: draw thick rounded line via overlapping circles
def draw_thick_line(draw, points, width, color):
    r = width // 2
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        steps = max(abs(x2 - x1), abs(y2 - y1))
        steps = max(steps, 1)
        for t in range(steps + 1):
            x = int(x1 + (x2 - x1) * t / steps)
            y = int(y1 + (y2 - y1) * t / steps)
            draw.ellipse([x - r, y - r, x + r, y + r], fill=color)

# Wave coordinates scaled to our canvas
# Original SVG: 1080x1080, icon between x=420-630, y=380-520
# Scale to 1000x1000 centered
scale = 1000 / 1080

def sv(x, y):
    return (int(x * scale), int(y * scale))

# Top wave (white)
top_wave = [sv(420, 450), sv(490, 380), sv(560, 450), sv(630, 380)]
draw_thick_line(draw, top_wave, 30, "#FFFFFF")

# Bottom wave (green)
bot_wave = [sv(420, 520), sv(490, 450), sv(560, 520), sv(630, 450)]
draw_thick_line(draw, bot_wave, 30, "#10B981")

# Mask to keep circular shape
mask = Image.new("L", (SIZE, SIZE), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.ellipse(
    [CENTER - OUTER_R, CENTER - OUTER_R, CENTER + OUTER_R, CENTER + OUTER_R],
    fill=255
)
img.putalpha(mask)

out = img.convert("RGBA")
background = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
final = Image.alpha_composite(background, out)
final = final.convert("RGB")
final.save("/home/user/NextFlow/public/tiktok-profile.png", "PNG", quality=100)
print("Salvat: public/tiktok-profile.png")
