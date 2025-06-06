import IdbHelper from '../utils/idb-helper';

class FavoriteModel {
  static async getFavoritesByUser(userId) {
    const allFavorites = await IdbHelper.getFavorites();
    return allFavorites.filter(favorite => favorite.userId === userId);
  }

  static async addToFavorite(story) {
    const user = JSON.parse(localStorage.getItem('STORY_APP'));
    if (!user) {
      throw new Error('User not logged in');
    }
    
    const favoriteStory = {
      ...story,
      userId: user.userId,
      favoritedAt: new Date().toISOString()
    };
    
    return await IdbHelper.saveFavorite(favoriteStory);
  }

  static async removeFromFavorite(id) {
    return await IdbHelper.deleteFavorite(id);
  }

  static async isFavorite(id) {
    const user = JSON.parse(localStorage.getItem('STORY_APP'));
    if (!user) return false;
    
    const favorite = await IdbHelper.getFavoriteById(id);
    return favorite && favorite.userId === user.userId;
  }
}

export default FavoriteModel; 