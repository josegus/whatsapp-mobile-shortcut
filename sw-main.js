'use strict'

const CACHE_NAME = 'cache-v1';

// The files we want to cache
const resourceList = [
    './',
    './index.html'
];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(resourceList);
    }));
});

function addToCache(cacheName, resourceList) {
    caches.open(cacheName).then(cache => {
        return cache.addAll(resourceList);
    });
}

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});
