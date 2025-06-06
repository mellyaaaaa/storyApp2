import AddStoryPresenter from '../../presenter/add-story-presenter';
import createAddStoryTemplate from '../templates/add-story-template';
import { applyViewTransition } from '../../utils/view-transition';
import '../../../scripts/components/story-form';

const AddStoryPage = {
  async render() {
    return `
      <section class="content" id="mainContent">
        <div class="add-story-page">
          ${createAddStoryTemplate()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    applyViewTransition();
    
    this._presenter = new AddStoryPresenter({
      view: this,
    });
    
    await this._presenter.init();
  },

  setupForm(submitHandler) {
    const storyForm = document.querySelector('story-form');
    if (storyForm) {
      storyForm.submitHandler = submitHandler;
    }
  },

  showLoading() {
    const submitButton = document.querySelector('.submit-button');
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
  },

  hideLoading() {
    const submitButton = document.querySelector('.submit-button');
    submitButton.textContent = 'Submit Story';
    submitButton.disabled = false;
  },

  showError(message) {
    let errorElement = document.querySelector('.error-message');
    
    if (!errorElement) {
      errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      const form = document.querySelector('.story-form');
      form.insertAdjacentElement('afterbegin', errorElement);
    }
    
    errorElement.textContent = message;
  },

  showSuccess(message) {
    let successElement = document.querySelector('.success-message');
    
    if (!successElement) {
      successElement = document.createElement('p');
      successElement.classList.add('success-message');
      const form = document.querySelector('.story-form');
      form.insertAdjacentElement('afterbegin', successElement);
    }
    
    successElement.textContent = message;
  },
};

export default AddStoryPage;