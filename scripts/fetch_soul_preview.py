import re
import urllib.request
from pathlib import Path

html = urllib.request.urlopen("https://soul.luminacodeltda.com.br/", timeout=30).read().decode(
    "utf-8", "ignore"
)
patterns = [
    r'property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']',
    r'content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']',
]
url = None
for pat in patterns:
    m = re.search(pat, html, re.I)
    if m:
        url = m.group(1)
        break

print("og:image:", url)
out = Path(__file__).resolve().parents[1] / "src" / "assets" / "soul-preview.png"

if url:
    data = urllib.request.urlopen(url, timeout=30).read()
    out.write_bytes(data)
    print("wrote", out, "bytes", len(data))
else:
    print("NO_OG_IMAGE")
