"""Create landing-page WebP derivatives without modifying the original assets.

Run with Python and Pillow: python scripts/optimize-landing-images.py
AI-assisted - see AI-USAGE.md #5
"""
from pathlib import Path
from shutil import copyfile
from PIL import Image

source = Path(__file__).resolve().parents[1] / "assets" / "images"
destination = source / "landing"
destination.mkdir(exist_ok=True)
images = {
    "sun": "sun.jpg", "moon": "moon.jpg", "mars": "mars.webp",
    "jupiter": "jupiter.jpg", "saturn": "saturn.png", "galaxy": "andromeda.png",
}
for name, filename in images.items():
    if filename.endswith('.webp'):
        copyfile(source / filename, destination / f"{name}.webp")
    else:
        with Image.open(source / filename) as image:
            image.convert("RGB").save(destination / f"{name}.webp", "WEBP", quality=82, method=6)
    print(f"{filename}: {(source / filename).stat().st_size:,} -> {(destination / f'{name}.webp').stat().st_size:,} bytes")
