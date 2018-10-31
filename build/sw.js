importScripts('./assets/js/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('adularia').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/anion/anionjq.html',
       '/anion/anionjq.min.js',
       '/ferrum/ferrumjq.html',
       '/ferrum/ferrumjq.min.js',
       '/assets/css/index.min.css',
       '/assets/css/style.min.css',
       '/assets/js/index.min.css',
       '/assets/js/jquery-3.3.1.min.js',
       '/assets/js/cache-polyfill.js',
      //  '/assets/svg/*.svg',
      //  '/assets/fonts/*.*',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
