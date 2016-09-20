var CACHE_VERSION = 2;
var cache_name = "main_cache";

self.addEventListener('install', function (event) {
  // Perform install steps
  console.log("Service worker installed");
});

self.addEventListener('activate', function (event) {
  console.log("Service worker activated");
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have 2 stream.
            var responseToCache = response.clone();

            caches.open(cache_name)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(function (e) {
          console.log(e);
        })
      }).catch(function (e) {
        console.log(e);
      })
  );
});