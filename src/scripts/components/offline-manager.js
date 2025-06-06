import IdbHelper from '../utils/idb-helper';

class OfflineManager extends HTMLElement {
  constructor() {
    super();
    this._stories = [];
  }

  connectedCallback() {
    this.render();
    this._initListeners();
    this._loadCachedStories();
  }

  async _loadCachedStories() {
    try {
      this._stories = await IdbHelper.getStories();
      this._updateStorageInfo();
    } catch (error) {
      console.error('Error loading cached stories:', error);
    }
  }

  _updateStorageInfo() {
    const storageInfoElement = this.querySelector('#storage-info');
    if (storageInfoElement) {
      storageInfoElement.textContent = `${this._stories.length} cerita tersimpan dalam cache`;
    }
  }

  _initListeners() {
    const clearButton = this.querySelector('#clear-cache-button');
    if (clearButton) {
      clearButton.addEventListener('click', async () => {
        try {
          await IdbHelper.clearStories();
          this._stories = [];
          this._updateStorageInfo();
          
          // Tampilkan pesan sukses
          const messageElement = document.createElement('div');
          messageElement.classList.add('success-message');
          messageElement.textContent = 'Cache berhasil dihapus';
          this.appendChild(messageElement);
          
          // Hapus pesan setelah 3 detik
          setTimeout(() => {
            messageElement.remove();
          }, 3000);
        } catch (error) {
          console.error('Error clearing cache:', error);
        }
      });
    }
  }

  render() {
    this.innerHTML = `
      <div class="offline-manager">
        <h3>Pengelolaan Data Offline</h3>
        <div id="storage-info">Memuat informasi cache...</div>
        <button id="clear-cache-button" class="button">Hapus Semua Cache</button>
      </div>
    `;
  }
}

customElements.define('offline-manager', OfflineManager);

export default OfflineManager;