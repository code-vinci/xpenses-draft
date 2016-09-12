const { assets } = serviceWorkerOptions;

console.log(assets);

addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v0').then((cache) => {
      return cache.addAll([
        ...assets,
        './',
      ]);
    });
  );
});

addEventListener('fetch', (event) => {
  let response;

  event.respondWith(
    caches.match(event.request).catch(() => {
      return fetch(event.request);
    }).then((response) => {
      caches.open('v0').then((cache) => {
        cache.put(event.request, response);
      });

      return response.clone();
    });
  )
});
