const CACHE_NAME = 'domislink-v1';
// Pre-cache static shell assets. Vite-hashed JS/CSS bundles are
// cached dynamically on first request via the fetch handler below.
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
];

// Install: cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          // Cache successful responses for same-origin requests
          if (
            response &&
            response.status === 200 &&
            response.type === 'basic'
          ) {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) =>
              cache.put(event.request, cloned)
            );
          }
          return response;
        })
        .catch(() => {
          // Return cached index.html for navigation requests (SPA fallback)
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
