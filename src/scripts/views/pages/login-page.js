import LoginPresenter from '../../presenter/login-presenter';
import createLoginTemplate from '../templates/login-template';
import { applyViewTransition } from '../../utils/view-transition';

const LoginPage = {
  async render() {
    return `
      <section class="content" id="mainContent">
        <div class="login-page">
          ${createLoginTemplate()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    applyViewTransition();
    
    this._presenter = new LoginPresenter({
      view: this,
    });
    
    await this._presenter.init();
  },

  setupEventListeners(onLoginHandler) {
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', onLoginHandler);
    }
  },

  getCredentials() {
    return {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
  },

  showLoading() {
    const submitButton = document.querySelector('#loginForm button[type="submit"]');
    submitButton.textContent = 'Logging in...';
    submitButton.disabled = true;
  },

  hideLoading() {
    const submitButton = document.querySelector('#loginForm button[type="submit"]');
    submitButton.textContent = 'Login';
    submitButton.disabled = false;
  },

  showError(message) {
    let errorElement = document.querySelector('.error-message');
    
    if (!errorElement) {
      errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      const form = document.querySelector('#loginForm');
      form.insertAdjacentElement('afterbegin', errorElement);
    }
    
    errorElement.textContent = message;
  },
};

export default LoginPage;