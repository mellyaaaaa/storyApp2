// Import komponen halaman pengaturan
import SettingsPage from '../components/settings-page';
import LoginPage from '../views/pages/login-page';
import RegisterPage from '../views/pages/register-page';
import HomePage from '../views/pages/home-page';
import DetailPage from '../views/pages/detail-page';
import AddStoryPage from '../views/pages/add-story-page';

const routes = {
  '/': LoginPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/home': HomePage,
  '/detail/:id': DetailPage,
  '/add': AddStoryPage,
  '/settings': {
    render: () => {
      return `
        <div id="mainContent" tabindex="-1">
          <settings-page></settings-page>
        </div>
      `;
    },
    afterRender: () => {
      // Kode tambahan jika diperlukan setelah render
    },
  },
};

export default routes;