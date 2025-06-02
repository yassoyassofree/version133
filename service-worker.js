self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(
        clients.claim()
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
    );
});
