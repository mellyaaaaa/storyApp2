import ApiService from '../data/api-service';

class AddStoryPresenter {
  constructor({ view }) {
    this._view = view;
  }

  async init() {
    this._view.setupForm(this._onSubmitStory.bind(this));
  }

  async _onSubmitStory({ description, photo, lat, lon }) {
    try {
      this._view.showLoading();
      
      const response = await ApiService.addStory({
        description,
        photo,
        lat,
        lon,
      });
      
      if (response.error) {
        this._view.showError(response.message);
        return;
      }
      
      this._view.showSuccess('Story added successfully!');
      
      setTimeout(() => {
        window.location.hash = '#/home';
      }, 2000);
    } catch (error) {
      this._view.showError('Failed to add story');
      console.error(error);
    } finally {
      this._view.hideLoading();
    }
  }
}

export default AddStoryPresenter;