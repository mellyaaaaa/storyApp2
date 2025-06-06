import RegisterPresenter from '../../presenter/register-presenter';
import createRegisterTemplate from '../templates/register-template';
import { applyViewTransition } from '../../utils/view-transition';

const RegisterPage = {
  async render() {
    return `
      <section class="content" id="mainContent">
        <div class="register-page">
          ${createRegisterTemplate()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    applyViewTransition();
    
    this._presenter = new RegisterPresenter({
      view: this,
    });
    
    await this._presenter.init();
  },

  setupEventListeners(onRegisterHandler) {
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', onRegisterHandler);
    }
  },

  getFormData() {
    return {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
  },

  showLoading() {
    const submitButton = document.querySelector('#registerForm button[type="submit"]');
    submitButton.textContent = 'Registering...';
    submitButton.disabled = true;
  },

  hideLoading() {
    const submitButton = document.querySelector('#registerForm button[type="submit"]');
    submitButton.textContent = 'Register';
    submitButton.disabled = false;
  },

  showError(message) {
    let errorElement = document.querySelector('.error-message');
    
    if (!errorElement) {
      errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      const form = document.querySelector('#registerForm');
      form.insertAdjacentElement('afterbegin', errorElement);
    }
    
    errorElement.textContent = message;
  },

  showSuccess(message) {
    let successElement = document.querySelector('.success-message');
    
    if (!successElement) {
      successElement = document.createElement('p');
      successElement.classList.add('success-message');
      const form = document.querySelector('#registerForm');
      form.insertAdjacentElement('afterbegin', successElement);
    }
    
    successElement.textContent = message;
  },
};

export default RegisterPage;