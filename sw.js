const CACHE = "merge-cooking-offline-v4";
const ASSETS = ["./", "./index.html", "./styles.css?v=4", "./game-data.js?v=4", "./app.js?v=4", "./manifest.json", "./icon.svg", "./reference-game.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
