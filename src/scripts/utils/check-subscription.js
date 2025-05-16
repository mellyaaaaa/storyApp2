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
  
  /**
   * Panggil fungsi ini saat aplikasi dimuat
   */
  export async function initNotification() {
    try {
      if ('serviceWorker' in navigator) {
        // Tunggu hingga service worker ready
        await navigator.serviceWorker.ready;
        
        // Periksa status subscription
        const isSubscribed = await checkSubscriptionStatus();
        
        // Jika sudah login (token ada) dan notification diizinkan, subscribe otomatis
        const token = localStorage.getItem('STORAGE_KEY');
        const notificationEnabled = localStorage.getItem('NOTIFICATION_ENABLED') === 'true';
        
        if (token && notificationEnabled && Notification.permission === 'granted' && !isSubscribed) {
          // Import dinamis untuk menghindari circular dependency
          const { subscribeToNotifications } = await import('./notification.js');
          
          try {
            const result = await subscribeToNotifications();
            console.log('✅ Auto subscribe berhasil:', result);
          } catch (error) {
            console.error('Gagal auto subscribe:', error);
          }
        }
      }
    } catch (error) {
      console.error('Error saat inisialisasi notifikasi:', error);
    }
  }