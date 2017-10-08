var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/assets/json/manifest.json',
  '/assets/css/style.css',
  '/assets/js/main-header.js',
  '/assets/js/main-footer.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});