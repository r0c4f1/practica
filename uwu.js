self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.add("./index.html");
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("ACTIVA");
});

self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
