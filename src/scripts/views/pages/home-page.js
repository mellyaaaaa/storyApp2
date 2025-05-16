import HomePresenter from '../../presenter/home-presenter';
import createHomeTemplate from '../templates/home-template';
import { applyViewTransition } from '../../utils/view-transition';
import '../../../scripts/components/story-item';
import '../../../scripts/components/story-map';

const HomePage = {
  async render() {
    return `
      <section class="content" id="mainContent">
        <div class="home-page">
          ${createHomeTemplate()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    applyViewTransition();
    
    this._presenter = new HomePresenter({
      view: this,
    });
    
    await this._presenter.init();
  },

  showLoading() {
    const loadingElement = document.querySelector('.loading-text');
    if (loadingElement) {
      loadingElement.style.display = 'block';
    }
  },

  hideLoading() {
    const loadingElement = document.querySelector('.loading-text');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  },

  showError(message) {
    const storyListElement = document.querySelector('#storyList');
    if (storyListElement) {
      storyListElement.innerHTML = `<p class="error-message">${message}</p>`;
    }
  },

  renderStories(stories) {
    const storyListElement = document.querySelector('#storyList');
    if (!storyListElement) return;
    
    if (stories.length === 0) {
      storyListElement.innerHTML = '<p class="empty-message">No stories found.</p>';
      return;
    }
    
    storyListElement.innerHTML = '';
    
    stories.forEach((story) => {
      const storyItemElement = document.createElement('story-item');
      storyItemElement.story = story;
      storyListElement.appendChild(storyItemElement);
    });
  },

  renderMap(stories) {
    const mapElement = document.querySelector('#storyMap');
    
    if (mapElement) {
      mapElement.stories = stories;
    }
  },
};

export default HomePage;