import React, { useState, useEffect } from 'react';
import { subscribeToNotifications, unsubscribeFromNotifications } from '../utils/notification';

const NotificationToggle = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Periksa status subscription saat komponen dimuat
    async function checkSubscriptionStatus() {
      try {
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            const subscription = await registration.pushManager.getSubscription();
            setIsSubscribed(!!subscription);
          }
        }
      } catch (err) {
        console.error('Gagal memeriksa status subscription:', err);
      }
    }

    checkSubscriptionStatus();
  }, []);

  const handleToggleNotification = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('🔔 Toggle notification:', isSubscribed);
      if (isSubscribed) {
        await unsubscribeFromNotifications();
        setIsSubscribed(false);
        localStorage.setItem('NOTIFICATION_ENABLED', 'false');
      } else {
        // Minta izin notifikasi terlebih dahulu jika belum
        if (Notification.permission !== 'granted') {
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') {
            throw new Error('Izin notifikasi ditolak');
          }
        }
        
        const result = await subscribeToNotifications();
        console.log('✅ Berhasil subscribe:', result);
        setIsSubscribed(true);
        localStorage.setItem('NOTIFICATION_ENABLED', 'true');
      }
    } catch (err) {
      console.error('Error saat toggle notifikasi:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="notification-toggle">
      <button 
        onClick={handleToggleNotification} 
        disabled={isLoading || (Notification.permission === 'denied')}
        className={`notification-btn ${isSubscribed ? 'subscribed' : ''}`}
      >
        {isLoading ? 'Memproses...' : isSubscribed ? 'Nonaktifkan Notifikasi' : 'Aktifkan Notifikasi'}
      </button>
      
      {error && <p className="error-message">{error}</p>}
      
      {Notification.permission === 'denied' && (
        <p className="error-message">
          Notifikasi diblokir oleh browser. Silakan ubah pengaturan izin di browser Anda.
        </p>
      )}
      
      {isSubscribed && !error && (
        <p className="success-message">
          Anda akan menerima notifikasi saat ada story baru.
        </p>
      )}
    </div>
  );
};

export default NotificationToggle;