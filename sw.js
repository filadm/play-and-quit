const CACHE="playquit-80275324fa";
const FILES=["./","index.html","app.css","app.js","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
/* Network first, so updates show up on the next open; the cache is the offline fallback. */
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const url=new URL(e.request.url),own=url.origin===location.origin,font=/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if(!own&&!font)return;
  e.respondWith(fetch(e.request).then(res=>{
    if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
    return res;
  }).catch(()=>caches.match(e.request).then(hit=>hit||(e.request.mode==="navigate"?caches.match("index.html"):Response.error()))));
});
