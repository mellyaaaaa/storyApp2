import { subscribeToNotifications, unsubscribeFromNotifications } from '../utils/notification';

class NotificationToggle extends HTMLElement {
  constructor() {
    super();
    this._isSubscribed = false;
    this._isLoading = false;
    this._error = null;

    // Bind methods
    this._handleToggleNotification = this._handleToggleNotification.bind(this);
  }

  connectedCallback() {
    this._checkSubscriptionStatus();
    this._render();
    this._initializeEvents();
  }

  async _checkSubscriptionStatus() {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          const subscription = await registration.pushManager.getSubscription();
          this._isSubscribed = !!subscription;
          this._render();
        }
      }
    } catch (err) {
      console.error('Gagal memeriksa status subscription:', err);
    }
  }

  async _handleToggleNotification() {
    this._isLoading = true;
    this._error = null;
    this._render();

    try {
      console.log('🔔 Toggle notification:', this._isSubscribed);
      if (this._isSubscribed) {
        await unsubscribeFromNotifications();
        this._isSubscribed = false;
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
        this._isSubscribed = true;
        localStorage.setItem('NOTIFICATION_ENABLED', 'true');
      }
    } catch (err) {
      console.error('Error saat toggle notifikasi:', err);
      this._error = err.message;
    } finally {
      this._isLoading = false;
      this._render();
    }
  }

  _initializeEvents() {
    const button = this.querySelector('.notification-btn');
    if (button) {
      button.addEventListener('click', this._handleToggleNotification);
    }
  }

  _render() {
    this.innerHTML = `
      <div class="notification-toggle">
        <button 
          class="notification-btn ${this._isSubscribed ? 'subscribed' : ''}"
          ${(this._isLoading || Notification.permission === 'denied') ? 'disabled' : ''}
        >
          ${this._isLoading ? 'Memproses...' : this._isSubscribed ? 'Nonaktifkan Notifikasi' : 'Aktifkan Notifikasi'}
        </button>
        
        ${this._error ? `
          <p class="error-message">${this._error}</p>
        ` : ''}
        
        ${Notification.permission === 'denied' ? `
          <p class="error-message">
            Notifikasi diblokir oleh browser. Silakan ubah pengaturan izin di browser Anda.
          </p>
        ` : ''}
        
        ${this._isSubscribed && !this._error ? `
          <p class="success-message">
            Anda akan menerima notifikasi saat ada story baru.
          </p>
        ` : ''}
      </div>
    `;

    this._initializeEvents();
  }
}

customElements.define('notification-toggle', NotificationToggle);

export default NotificationToggle;