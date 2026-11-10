from pathlib import Path

base = Path(__file__).resolve().parents[1] / "src" / "assets"
expo = base / "expo-icon.svg"

if not expo.exists():
    raise SystemExit("expo-icon.svg missing")

text = expo.read_text(encoding="utf-8")
if "fill=" not in text:
    text = text.replace("<path ", '<path fill="#000020" ', 1)
    expo.write_text(text, encoding="utf-8")
    print("added fill")
else:
    print("already has fill")

print("ok", expo.stat().st_size)
