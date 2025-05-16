const CACHE_NAME = 'storyapp-v1.0.1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.bundle.js',
  '/app.webmanifest',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  // Tambahkan semua aset statis yang perlu di-cache
];

// Instalasi Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache dibuka');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktivasi Service Worker dan membersihkan cache lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Strategi Cache-First dengan Network Fallback
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Jika permintaan ke API, gunakan strategi Network-First
  if (requestUrl.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      }).catch(() => {
        // Jika offline dan tidak ada di cache, tampilkan halaman offline
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
        return new Response('Tidak dapat terhubung ke internet', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        });
      })
    );
  } else {
    // Untuk API, gunakan strategi Network-First
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Jika berhasil, simpan salinan ke cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              // Hanya cache respons GET yang berhasil
              if (event.request.method === 'GET' && response.status === 200) {
                cache.put(event.request, responseToCache);
              }
            });
          return response;
        })
        .catch(() => {
          // Jika gagal, coba ambil dari cache
          return caches.match(event.request);
        })
    );
  }
});

// Menangani notifikasi push
self.addEventListener('push', (event) => {
  let notificationData = {};
  
  try {
    notificationData = event.data.json();
  } catch (e) {
    notificationData = {
      title: 'Notifikasi Baru',
      body: event.data ? event.data.text() : 'Tidak ada detail',
    };
  }
  
  const options = {
    body: notificationData.body || 'Ada pembaruan baru di StoryApp',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    data: {
      url: notificationData.url || '/',
    },
  };
  
  event.waitUntil(
    self.registration.showNotification(
      notificationData.title || 'StoryApp',
      options
    )
  );
});

// Menangani klik pada notifikasi
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});