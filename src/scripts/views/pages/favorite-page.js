import createFavoriteTemplate from '../templates/favorite-template';
import { applyViewTransition } from '../../utils/view-transition';
import '../../../scripts/components/story-item';
import '../../../scripts/components/favorite-button';
import FavoriteModel from '../../models/favorite-model';
import User from '../../models/user-model';

const FavoritePage = {
  async render() {
    return `
      <section class="content" id="mainContent">
        <div class="favorite-page">
          ${createFavoriteTemplate()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    applyViewTransition();
    await this._loadFavoriteStories();
  },

  async _loadFavoriteStories() {
    const favoriteListElement = document.querySelector('#favoriteList');
    if (!favoriteListElement) return;

    try {
      const user = User.getLoggedInUser();
      if (!user) {
        favoriteListElement.innerHTML = '<p class="error-message">Please login to view your favorites.</p>';
        return;
      }

      const favoriteStories = await FavoriteModel.getFavoritesByUser(user.userId);
      
      if (favoriteStories.length === 0) {
        favoriteListElement.innerHTML = '<p class="empty-message">No favorite stories yet.</p>';
        return;
      }

      favoriteListElement.innerHTML = '';
      
      favoriteStories.forEach((story) => {
        const storyItemElement = document.createElement('story-item');
        storyItemElement.story = story;
        favoriteListElement.appendChild(storyItemElement);
      });
    } catch (error) {
      console.error('Error loading favorite stories:', error);
      favoriteListElement.innerHTML = '<p class="error-message">Failed to load favorite stories.</p>';
    }
  }
};

export default FavoritePage; 