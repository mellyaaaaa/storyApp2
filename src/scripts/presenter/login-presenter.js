import ApiService from '../data/api-service';
import User from '../models/user-model';

class LoginPresenter {
  constructor({ view }) {
    this._view = view;
  }

  async init() {
    this._view.setupEventListeners(this._onLogin.bind(this));
  }

  async _onLogin(event) {
    event.preventDefault();

    const credentials = this._view.getCredentials();

    try {
      this._view.showLoading();
      const response = await ApiService.login(credentials);

      if (response.error) {
        this._view.showError(response.message);
        return;
      }

      const user = User.fromLoginResponse(response.loginResult);
      user.saveToStorage();
      
      const loginEvent = new CustomEvent('user-login', { 
        detail: { user: user } 
      });
      document.dispatchEvent(loginEvent);

      window.location.hash = '#/home';
    } catch (error) {
      this._view.showError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      this._view.hideLoading();
    }
  }
}

export default LoginPresenter;