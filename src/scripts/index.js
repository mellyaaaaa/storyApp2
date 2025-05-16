import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/skip-content';
import App from './app';
import { registerServiceWorker } from './utils/notification';
import { initNotification } from './utils/check-subscription';
import { openDB } from 'idb';

const app = new App({
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  try {
    await registerServiceWorker();
    console.log('Service worker berhasil didaftarkan');
    await initNotification();

  } catch (error) {
    console.error('Gagal mendaftarkan service worker:', error);
  }
});