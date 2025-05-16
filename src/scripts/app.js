import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import User from './models/user-model';
import './components/offline-manager';

class App {
  constructor({ content }) {
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    document.querySelector('app-bar').addEventListener('connected', () => {
    });
  }

  _checkAuth() {
    const isAuthenticated = User.isLoggedIn();
    const currentUrl = UrlParser.parseActiveUrlWithCombiner();
    
    const authRoutes = ['/', '/login', '/register'];
    const protectedRoutes = ['/home', '/detail/:id', '/add'];
    
    if (!isAuthenticated && protectedRoutes.includes(currentUrl)) {
      window.location.hash = '#/login';
      return false;
    }
    
    if (isAuthenticated && authRoutes.includes(currentUrl)) {
      window.location.hash = '#/home';
      return false;
    }
    
    return true;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    
    if (!this._checkAuth()) return;
    
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
      
      const skipLink = document.querySelector('.skip-link');
      
      if (skipLink) {
        skipLink.addEventListener('click', (event) => {
          event.preventDefault();
          const content = document.querySelector('#mainContent');
          content.tabIndex = -1;
          content.focus();
        });
      }
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  }
}

export default App;