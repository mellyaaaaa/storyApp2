import ApiService from '../data/api-service';

const VAPID_PUBLIC_KEY = 'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk';

// Fungsi untuk mengkonversi base64 ke Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Mendaftarkan service worker
export async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker berhasil didaftarkan:', registration);
      return registration;
    } catch (error) {
      console.error('Gagal mendaftarkan Service Worker:', error);
      throw error;
    }
  } else {
    throw new Error('Service Worker tidak didukung di browser ini');
  }
}

// Memeriksa apakah notifikasi diizinkan
async function checkNotificationPermission() {
  if (!('Notification' in window)) {
    throw new Error('Browser ini tidak mendukung notifikasi');
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission === 'denied') {
    throw new Error('Pengguna telah menolak izin notifikasi');
  }

  // Jika belum ada izin, minta izin
  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

// Mendapatkan subscription
async function getSubscription(registration) {
  const subscription = await registration.pushManager.getSubscription();
  if (subscription) {
    return subscription;
  }

  // Jika belum ada subscription, buat baru
  return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
  });
}

// Fungsi utama untuk mendaftarkan notifikasi
export async function subscribeToNotifications() {
  try {
    // Periksa izin notifikasi
    await checkNotificationPermission();
    
    // Daftarkan service worker
    const registration = await registerServiceWorker();
    
    // Dapatkan subscription
    const subscription = await getSubscription(registration);
    
    // Kirim subscription ke server menggunakan ApiService
    const result = await ApiService.subscribeNotification(subscription);
    
    return result;
  } catch (error) {
    console.error('Gagal mendaftarkan notifikasi:', error);
    throw error;
  }
}

// Fungsi untuk berhenti berlangganan notifikasi
export async function unsubscribeFromNotifications() {
  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration) {
      throw new Error('Service Worker tidak terdaftar');
    }
    
    const subscription = await registration.pushManager.getSubscription();
    if (!subscription) {
      throw new Error('Tidak ada subscription yang aktif');
    }
    
    // Kirim permintaan unsubscribe ke server menggunakan ApiService
    const result = await ApiService.unsubscribeNotification(subscription.endpoint);
    
    // Hapus subscription dari browser
    await subscription.unsubscribe();
    
    return result;
  } catch (error) {
    console.error('Gagal berhenti berlangganan notifikasi:', error);
    throw error;
  }
}

export async function checkSubscriptionStatus() {
  try {
    // Pastikan service worker didukung
    if ('serviceWorker' in navigator) {
      // Dapatkan service worker registration yang aktif
      const registration = await navigator.serviceWorker.getRegistration();
      
      if (registration) {
        // Dapatkan subscription
        const subscription = await registration.pushManager.getSubscription();
        
        // Jika ada subscription, berarti sudah berlangganan
        if (subscription) {
          console.log('✅ Sudah subscribe');
          return true;
        } else {
          console.log('🔔 Belum subscribe');
          return false;
        }
      }
    }
    
    return false;
  } catch (error) {
    console.error('Error saat memeriksa status subscription:', error);
    return false;
  }
}
