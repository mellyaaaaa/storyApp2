import CONFIG from '../global/config';
import { ApiEndpoint } from '../utils/constants';

class ApiService {
  static async register({ name, email, password }) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}${ApiEndpoint.REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async login({ email, password }) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}${ApiEndpoint.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async getAllStories({ page = 1, size = 10, location = 0 } = {}) {
    try {
      const token = localStorage.getItem(CONFIG.STORAGE_KEY);
      const parsedToken = JSON.parse(token).token;

      const url = new URL(`${CONFIG.BASE_URL}${ApiEndpoint.GET_ALL_STORIES}`);
      url.searchParams.append('page', page);
      url.searchParams.append('size', size);
      url.searchParams.append('location', location);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async getDetailStory(id) {
    try {
      const token = localStorage.getItem(CONFIG.STORAGE_KEY);
      const parsedToken = JSON.parse(token).token;

      // Penting: Gunakan ID persis seperti yang diterima, jangan ubah case
      const response = await fetch(`${CONFIG.BASE_URL}${ApiEndpoint.DETAIL_STORY(id)}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          return { error: true, message: 'Story not found' };
        }
        return { error: true, message: `Server returned ${response.status}` };
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async addStory({ description, photo, lat, lon }) {
    try {
      const token = localStorage.getItem(CONFIG.STORAGE_KEY);
      const parsedToken = JSON.parse(token).token;

      const formData = new FormData();
      formData.append('description', description);
      formData.append('photo', photo);
      
      if (lat) formData.append('lat', lat);
      if (lon) formData.append('lon', lon);

      const response = await fetch(`${CONFIG.BASE_URL}${ApiEndpoint.ADD_STORY}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
        body: formData,
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async subscribeNotification(subscription) {
    try {
      const token = localStorage.getItem(CONFIG.STORAGE_KEY);
      const parsedToken = JSON.parse(token).token;
      
      const subscriptionJson = subscription.toJSON();
      
      const response = await fetch(`${CONFIG.BASE_URL}/notifications/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${parsedToken}`,
        },
        body: JSON.stringify({
          endpoint: subscriptionJson.endpoint,
          keys: {
            p256dh: subscriptionJson.keys.p256dh,
            auth: subscriptionJson.keys.auth
          }
        }),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async unsubscribeNotification(endpoint) {
    try {
      const token = localStorage.getItem(CONFIG.STORAGE_KEY);
      const parsedToken = JSON.parse(token).token;
      
      const response = await fetch(`${CONFIG.BASE_URL}/notifications/subscribe`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${parsedToken}`,
        },
        body: JSON.stringify({
          endpoint,
        }),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
}

export default ApiService;