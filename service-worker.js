const CACHE_NAME = 'inforfacile-cache-v1.1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/styles.css',
    '/assets/logo.webp',
    '/assets/logo-png.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
