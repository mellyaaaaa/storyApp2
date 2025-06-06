import { openDB } from 'idb';

const DATABASE_NAME = 'story-app-db';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'stories';
const FAVORITE_STORE_NAME = 'favorites';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    database.createObjectStore(FAVORITE_STORE_NAME, { keyPath: 'id' });
  },
});

const IdbHelper = {
  async getStories() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async getStoryById(id) {
    if (!id) {
      return null;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async saveStories(stories) {
    const db = await dbPromise;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    
    // Simpan setiap cerita ke dalam IndexedDB
    stories.forEach((story) => {
      store.put(story);
    });
    
    await tx.done;
    return stories;
  },

  async saveStory(story) {
    return (await dbPromise).put(OBJECT_STORE_NAME, story);
  },

  async deleteStory(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async clearStories() {
    return (await dbPromise).clear(OBJECT_STORE_NAME);
  },

  async searchStories(query) {
    const stories = await this.getStories();
    return stories.filter((story) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        story.name.toLowerCase().includes(lowerCaseQuery) ||
        story.description.toLowerCase().includes(lowerCaseQuery)
      );
    });
  },

  // Favorite methods
  async getFavorites() {
    return (await dbPromise).getAll(FAVORITE_STORE_NAME);
  },

  async getFavoriteById(id) {
    if (!id) {
      return null;
    }
    return (await dbPromise).get(FAVORITE_STORE_NAME, id);
  },

  async saveFavorite(story) {
    return (await dbPromise).put(FAVORITE_STORE_NAME, story);
  },

  async deleteFavorite(id) {
    return (await dbPromise).delete(FAVORITE_STORE_NAME, id);
  },

  async clearFavorites() {
    return (await dbPromise).clear(FAVORITE_STORE_NAME);
  },
};

export default IdbHelper;