import ApiService from '../data/api-service';
import Story from '../models/story-model';
import IdbHelper from '../utils/idb-helper';

class DetailPresenter {
  constructor({ view, id }) {
    this._view = view;
    this._id = id;
    this._story = null;
  }

  async init() {
    await this._loadStory();
  }

  async _loadStory() {
    try {
      this._view.showLoading();
      
      // Coba ambil data dari API
      const response = await ApiService.getDetailStory(this._id);
      
      if (!response || response.error) {
        // Jika gagal, coba ambil dari IndexedDB
        console.log('Gagal mengambil data dari API, mencoba dari cache...');
        const cachedStory = await IdbHelper.getStoryById(this._id);
        
        if (cachedStory) {
          this._story = new Story(cachedStory);
          this._view.renderStory(this._story);
          
          if (this._story.hasLocation) {
            this._view.renderMap(this._story);
          }
          
          this._view.showInfo('Menampilkan data dari cache. Silakan refresh halaman ketika online.');
          return;
        }
        
        const message = response?.message || 'Gagal memuat detail cerita';
        this._view.showError(message);
        return;
      }
      
      if (!response.story) {
        this._view.showError('Format data tidak valid dari server');
        return;
      }
      
      this._story = Story.fromApiResponse(response.story);
      
      // Simpan ke IndexedDB untuk penggunaan offline
      await IdbHelper.saveStory(this._story);
      
      this._view.renderStory(this._story);
      
      if (this._story.hasLocation) {
        this._view.renderMap(this._story);
      }
    } catch (error) {
      console.error('Error loading story detail:', error);
      
      // Coba ambil dari IndexedDB jika terjadi error
      const cachedStory = await IdbHelper.getStoryById(this._id);
      
      if (cachedStory) {
        this._story = new Story(cachedStory);
        this._view.renderStory(this._story);
        
        if (this._story.hasLocation) {
          this._view.renderMap(this._story);
        }
        
        this._view.showInfo('Menampilkan data dari cache. Silakan refresh halaman ketika online.');
      } else {
        this._view.showError('Gagal memuat detail cerita. Silakan coba lagi nanti.');
      }
    } finally {
      this._view.hideLoading();
    }
  }
}

export default DetailPresenter;