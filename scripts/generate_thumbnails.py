"""Generate project thumbnails. Requires Python and Pillow: pip install Pillow."""

import json
import re
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
OUTPUT = PUBLIC / 'thumbnails'
OUTPUT.mkdir(exist_ok=True)

sources = re.findall(r'image:\s*[\'"]([^\'"]+)[\'"]',
                     (ROOT / 'src/Projects/projectData.js').read_text(encoding='utf-8'))
manifest = {}
original_bytes = 0
thumbnail_bytes = 0

for source in dict.fromkeys(sources):
    if source.startswith(('https://', 'http://', '//')):
        continue
    original = PUBLIC / source.lstrip('/')
    destination = OUTPUT / (original.stem + '.webp')
    with Image.open(original) as image:
        thumbnail = ImageOps.exif_transpose(image)
        thumbnail.thumbnail((800, 800), Image.Resampling.LANCZOS)
        thumbnail = thumbnail.convert('RGBA' if 'A' in thumbnail.getbands() else 'RGB')
        thumbnail.save(destination, 'WEBP', quality=80, method=6)
        manifest[source] = {
            'src': '/thumbnails/' + destination.name,
            'width': thumbnail.width,
            'height': thumbnail.height,
        }
    original_bytes += original.stat().st_size
    thumbnail_bytes += destination.stat().st_size

(ROOT / 'src/Projects/thumbnails.json').write_text(
    json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(f'{len(manifest)} thumbnails: {original_bytes / 1024**2:.2f} MiB originals '
      f'-> {thumbnail_bytes / 1024**2:.2f} MiB thumbnails '
      f'({1 - thumbnail_bytes / original_bytes:.1%} smaller)')
