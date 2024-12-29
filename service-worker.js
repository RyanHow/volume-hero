// service-worker.js

// Minimal Service Worker with no caching
self.addEventListener('install', (event) => {
    // Force the waiting service worker to become the active one
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    // Become immediately active, claim all clients
    event.waitUntil(self.clients.claim());
  });
  
  // No 'fetch' event listener => no caching. 
  // The PWA always fetches files from the network each time.