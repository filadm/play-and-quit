"""Builds the public site (repo root) from src/app.html.
Moves CSS and JS into their own files so the page can use a strict
content security policy (no inline scripts allowed)."""
import hashlib, pathlib, re
here = pathlib.Path(__file__).parent
src = (here / "src" / "app.html").read_text()
css = re.search(r"<style>(.*?)</style>", src, re.S).group(1)
js = re.search(r"<script>(.*?)</script>", src, re.S).group(1)
head = "\n".join(l for l in src.splitlines()[:5] if l.startswith(("<title", "<meta name=\"theme", "<link rel=\"stylesheet")))
body = re.search(r"</style>(.*?)<script>", src, re.S).group(1).strip()
out = here
(out / "app.css").write_text(css.strip() + "\n")
(out / "app.js").write_text(js.strip() + "\n")
csp = ("default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
       "font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; manifest-src 'self'; "
       "worker-src 'self'; base-uri 'none'; form-action 'none'; object-src 'none'")
html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="{csp}">
<meta name="referrer" content="no-referrer">
{head}
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<link rel="stylesheet" href="app.css">
<style>:root{{padding-top:env(safe-area-inset-top,0px)}}body{{margin:0}}[hidden]{{display:none!important}}</style>
</head>
<body>
{body}
<script src="app.js"></script>
</body>
</html>
"""
(out / "index.html").write_text(html)
ver = hashlib.sha256((html + css + js).encode()).hexdigest()[:10]
sw = (out / "sw.js").read_text()
sw = re.sub(r'const CACHE="playquit-[^"]*";', f'const CACHE="playquit-{ver}";', sw)
sw = sw.replace('const FILES=["./","index.html",', 'const FILES=["./","index.html","app.css","app.js",') if '"app.js"' not in sw else sw
(out / "sw.js").write_text(sw)
print("built", ver)
