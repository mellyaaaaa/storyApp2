import ApiService from '../data/api-service';
import Story from '../models/story-model';
import IdbHelper from '../utils/idb-helper';

class HomePresenter {
  constructor({ view }) {
    this._view = view;
    this._stories = [];
  }

  async init() {
    await this._loadStories();
  }

  async _loadStories() {
    try {
      this._view.showLoading();
      
      // Coba ambil data dari API
      const response = await ApiService.getAllStories({ location: 1 });
      
      if (!response || response.error) {
        // Jika gagal, coba ambil dari IndexedDB
        console.log('Gagal mengambil data dari API, mencoba dari cache...');
        const cachedStories = await IdbHelper.getStories();
        
        if (cachedStories && cachedStories.length > 0) {
          this._stories = cachedStories.map(story => new Story(story));
          this._view.renderStories(this._stories);
          
          if (this._stories.some(story => story.hasLocation)) {
            this._view.renderMap(this._stories);
          }
          
          this._view.showInfo('Menampilkan data dari cache. Silakan refresh halaman ketika online.');
          return;
        }
        
        const message = response?.message || 'Gagal memuat cerita';
        this._view.showError(message);
        return;
      }
      
      if (!response.listStory || !Array.isArray(response.listStory)) {
        this._view.showError('Format data tidak valid dari server');
        return;
      }
      
      this._stories = response.listStory.map(story => {
        return new Story({
          id: story.id || '',
          name: story.name || 'Unknown',
          description: story.description || '',
          photoUrl: story.photoUrl || '',
          createdAt: story.createdAt || new Date().toISOString(),
          lat: story.lat || null,
          lon: story.lon || null,
        });
      });
      
      // Simpan ke IndexedDB untuk penggunaan offline
      await IdbHelper.saveStories(this._stories);
      
      this._view.renderStories(this._stories);
      this._view.renderMap(this._stories);
    } catch (error) {
      console.error('Error loading stories:', error);
      
      // Coba ambil dari IndexedDB jika terjadi error
      const cachedStories = await IdbHelper.getStories();
      
      if (cachedStories && cachedStories.length > 0) {
        this._stories = cachedStories.map(story => new Story(story));
        this._view.renderStories(this._stories);
        
        if (this._stories.some(story => story.hasLocation)) {
          this._view.renderMap(this._stories);
        }
        
        this._view.showInfo('Menampilkan data dari cache. Silakan refresh halaman ketika online.');
      } else {
        this._view.showError('Gagal memuat cerita. Silakan coba lagi nanti.');
      }
    } finally {
      this._view.hideLoading();
    }
  }

  async deleteStory(id) {
    try {
      this._view.showLoading();
      
      // Hapus dari IndexedDB
      await IdbHelper.deleteStory(id);
      
      // Perbarui tampilan
      this._stories = this._stories.filter(story => story.id !== id);
      this._view.renderStories(this._stories);
      
      this._view.showInfo('Cerita berhasil dihapus dari cache.');
    } catch (error) {
      console.error('Error deleting story:', error);
      this._view.showError('Gagal menghapus cerita dari cache.');
    } finally {
      this._view.hideLoading();
    }
  }

  async searchStories(query) {
    try {
      this._view.showLoading();
      
      if (!query) {
        // Jika query kosong, tampilkan semua cerita
        const cachedStories = await IdbHelper.getStories();
        this._stories = cachedStories.map(story => new Story(story));
      } else {
        // Cari cerita berdasarkan query
        const searchResults = await IdbHelper.searchStories(query);
        this._stories = searchResults.map(story => new Story(story));
      }
      
      this._view.renderStories(this._stories);
      
      if (this._stories.length === 0) {
        this._view.showInfo('Tidak ada cerita yang sesuai dengan pencarian.');
      }
    } catch (error) {
      console.error('Error searching stories:', error);
      this._view.showError('Gagal mencari cerita.');
    } finally {
      this._view.hideLoading();
    }
  }
}

export default HomePresenter;