import ApiService from '../data/api-service';

class RegisterPresenter {
  constructor({ view }) {
    this._view = view;
  }

  async init() {
    this._view.setupEventListeners(this._onRegister.bind(this));
  }

  async _onRegister(event) {
    event.preventDefault();
    
    const formData = this._view.getFormData();

    try {
      this._view.showLoading();
      const response = await ApiService.register(formData);

      if (response.error) {
        this._view.showError(response.message);
        return;
      }

      this._view.showSuccess('Registration successful! Please login.');
      
      setTimeout(() => {
        window.location.hash = '#/login';
      }, 2000);
    } catch (error) {
      this._view.showError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      this._view.hideLoading();
    }
  }
}

export default RegisterPresenter;