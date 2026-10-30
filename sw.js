const CACHE = "merge-cooking-offline-v2";
const ASSETS = ["./", "./index.html", "./styles.css", "./game-data.js", "./app.js", "./manifest.json", "./icon.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
