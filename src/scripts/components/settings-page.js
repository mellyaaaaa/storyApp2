import { subscribeToNotifications, unsubscribeFromNotifications } from '../utils/notification';

class SettingsPage extends HTMLElement {
  constructor() {
    super();
    this._notificationEnabled = this._getNotificationSetting();
  }

  connectedCallback() {
    this._render();
    this._initSettings();
  }

  _getNotificationSetting() {
    return localStorage.getItem('NOTIFICATION_ENABLED') === 'true';
  }

  _saveNotificationSetting(enabled) {
    localStorage.setItem('NOTIFICATION_ENABLED', enabled);
    this._notificationEnabled = enabled;
  }

  async _requestNotificationPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        // Setelah mendapatkan izin, lakukan subscribe ke push notification
        try {
          const result = await subscribeToNotifications();
          console.log('✅ Berhasil subscribe:', result);
          this._saveNotificationSetting(true);
          alert('Notifikasi berhasil diaktifkan!');
        } catch (subscribeError) {
          console.error('Gagal subscribe notifikasi:', subscribeError);
          alert(`Gagal mengaktifkan notifikasi: ${subscribeError.message}`);
          this._saveNotificationSetting(false);
        }
      } else {
        this._saveNotificationSetting(false);
        alert('Izin notifikasi ditolak oleh pengguna.');
      }
      this._render();
      this._initSettings();
    } catch (error) {
      console.error('Error saat meminta izin notifikasi:', error);
      alert('Terjadi kesalahan saat meminta izin notifikasi.');
    }
  }

  _initSettings() {
    const notificationToggle = this.querySelector('#notificationToggle');
    if (notificationToggle) {
      notificationToggle.checked = this._notificationEnabled;
      notificationToggle.addEventListener('change', async (event) => {
        if (event.target.checked) {
          await this._requestNotificationPermission();
        } else {
          try {
            // Unsubscribe dari notifikasi
            await unsubscribeFromNotifications();
            this._saveNotificationSetting(false);
            alert('Notifikasi dinonaktifkan.');
          } catch (error) {
            console.error('Gagal menonaktifkan notifikasi:', error);
            alert(`Gagal menonaktifkan notifikasi: ${error.message}`);
          }
        }
      });
    }
  }

  _render() {
    this.innerHTML = `
      <div class="settings-page">
        <h2>Pengaturan Aplikasi</h2>
        
        <div class="settings-section">
          <h3>Notifikasi</h3>
          <div class="setting-item">
            <label for="notificationToggle" class="toggle-label">
              Aktifkan Notifikasi
              <div class="toggle-description">
                Dapatkan notifikasi saat ada cerita baru atau pembaruan penting.
              </div>
            </label>
            <div class="toggle-switch">
              <input 
                type="checkbox" 
                id="notificationToggle" 
                ${this._notificationEnabled ? 'checked' : ''}
                aria-label="Aktifkan notifikasi"
              >
              <label for="notificationToggle" class="toggle-slider"></label>
            </div>
          </div>
          <p class="setting-info">
            ${Notification.permission === 'denied' 
              ? 'Notifikasi diblokir oleh browser. Silakan ubah pengaturan izin di browser Anda.' 
              : 'Aktifkan notifikasi untuk mendapatkan pembaruan terbaru.'}
          </p>
        </div>
        
        <div class="settings-section">
          <h3>Tentang Aplikasi</h3>
          <p>Story App v1.0.1</p>
          <p>Aplikasi berbagi cerita dengan fitur lokasi dan foto.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('settings-page', SettingsPage);

export default SettingsPage;