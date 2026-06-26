// Service Worker — makes the app work offline
const CACHE_NAME = 'spark-estimator-v1';

// Files to cache for offline use
const FILES_TO_CACHE = [
  '/index.html',
  '/script.js',
  '/style.css',
  '/manifest.json',
];

// Install — cache all files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch — serve from cache if offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});