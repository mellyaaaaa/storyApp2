import FavoriteModel from '../models/favorite-model';
import User from '../models/user-model';

class FavoriteButton extends HTMLElement {
  constructor() {
    super();
    this._story = null;
    this._isFavorite = false;
  }

  connectedCallback() {
    this._render();
  }

  set story(story) {
    this._story = story;
    this._checkFavoriteStatus();
  }

  async _checkFavoriteStatus() {
    if (!this._story) return;

    const user = User.getLoggedInUser();
    if (!user) {
      this._isFavorite = false;
      this._render();
      return;
    }

    this._isFavorite = await FavoriteModel.isFavorite(this._story.id);
    this._render();
  }

  async _handleClick() {
    if (!this._story) return;

    const user = User.getLoggedInUser();
    if (!user) {
      alert('Please login to add favorites');
      return;
    }

    try {
      if (this._isFavorite) {
        await FavoriteModel.removeFromFavorite(this._story.id);
        this._isFavorite = false;
      } else {
        await FavoriteModel.addToFavorite(this._story);
        this._isFavorite = true;
      }
      this._render();
    } catch (error) {
      console.error('Error toggling favorite:', error);
      alert('Failed to update favorite status');
    }
  }

  _render() {
    this.innerHTML = `
      <button class="favorite-button ${this._isFavorite ? 'favorited' : ''}" aria-label="${this._isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
        <i class="fa fa-heart"></i>
      </button>
    `;

    const button = this.querySelector('.favorite-button');
    if (button) {
      button.addEventListener('click', () => this._handleClick());
    }
  }
}

if (!customElements.get('favorite-button')) {
  customElements.define('favorite-button', FavoriteButton);
} 