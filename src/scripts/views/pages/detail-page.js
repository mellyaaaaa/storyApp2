import DetailPresenter from '../../presenter/detail-presenter';
import createDetailTemplate from '../templates/detail-template';
import { applyViewTransition } from '../../utils/view-transition';
import UrlParser from '../../routes/url-parser';
import '../../../scripts/components/story-map';

const DetailPage = {
  async render() {
    return `
      <section class="content" id="mainContent">
        <div class="detail-page">
          <p class="loading-text">Loading story...</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    applyViewTransition();
    
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    
    const storyId = url.id ? decodeURIComponent(url.id) : null;
    
    this._presenter = new DetailPresenter({
      view: this,
      id: storyId,
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
    const detailPageElement = document.querySelector('.detail-page');
    if (detailPageElement) {
      detailPageElement.innerHTML = `
        <div class="error-container">
          <p class="error-message">${message}</p>
          <a href="#/home" class="back-button">Back to Home</a>
        </div>
      `;
    }
  },

  renderStory(story) {
    const detailPageElement = document.querySelector('.detail-page');
    if (detailPageElement) {
      detailPageElement.innerHTML = createDetailTemplate(story);
    }
  },

  renderMap(story) {
    const mapElement = document.querySelector('#detailMap');
    if (mapElement) {
      mapElement.story = story;
    }
  },
};

export default DetailPage;