// // service-worker.js

// const CACHE_NAME = 'my-website-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/script_gibs.js',
//   '/script_links.js',
//   '/script_main.js' ,
//   '/script_particles_image.js',
//   '/script_particles.js',
//   '/style.css'
//   // Add more resources to cache as needed
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         return response || fetch(event.request);
//       })
//   );
// });
