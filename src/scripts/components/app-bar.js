class AppBar extends HTMLElement {
 constructor() {
   super();
   this._onLogoutClick = this._onLogoutClick.bind(this);
 }

 connectedCallback() {
   this._isLoggedIn = localStorage.getItem('STORY_APP') !== null;
   this._render();
   this._setupNavigationEvents();
   window.addEventListener('hashchange', this._checkLoginStatus.bind(this));
   document.addEventListener('user-login', this._handleUserLogin.bind(this));
   document.addEventListener('user-logout', this._handleUserLogout.bind(this));
 }

 disconnectedCallback() {
   this._removeNavigationEvents();
   window.removeEventListener('hashchange', this._checkLoginStatus.bind(this));
   document.removeEventListener('user-login', this._handleUserLogin.bind(this));
   document.removeEventListener('user-logout', this._handleUserLogout.bind(this));
 }
 
 _checkLoginStatus() {
   const newLoginStatus = localStorage.getItem('STORY_APP') !== null;
   if (this._isLoggedIn !== newLoginStatus) {
     this._isLoggedIn = newLoginStatus;
     this._render();
     this._setupNavigationEvents();
   }
 }

 _handleUserLogin() {
   this._isLoggedIn = true;
   this._render();
   this._setupNavigationEvents();
 }

 _handleUserLogout() {
   this._isLoggedIn = false;
   this._render();
   this._setupNavigationEvents();
 }

 _setupNavigationEvents() {
   const logoutButton = this.querySelector('.logout-button');
   if (logoutButton) {
     logoutButton.addEventListener('click', this._onLogoutClick);
   }
 }

 _removeNavigationEvents() {
   const logoutButton = this.querySelector('.logout-button');
   if (logoutButton) {
     logoutButton.removeEventListener('click', this._onLogoutClick);
   }
 }

 _onLogoutClick(event) {
   event.preventDefault();
   localStorage.removeItem('STORY_APP');
   
   const logoutEvent = new CustomEvent('user-logout');
   document.dispatchEvent(logoutEvent);
   
   window.location.hash = '#/login';
 }

 _render() {
   this.innerHTML = `
     <header class="app-bar">
       <div class="app-bar__brand">
         <h1>Story App</h1>
       </div>
       <nav class="app-bar__navigation" aria-label="main navigation">
         <ul>
           ${this._isLoggedIn ? `
             <li><a href="#/home" aria-label="View stories">Stories</a></li>
             <li><a href="#/add" aria-label="Add a new story">Add Story</a></li>
             <li><a href="#/settings" aria-label="Application settings">Pengaturan</a></li>
             <li><button class="logout-button" aria-label="Logout">Logout</button></li>
           ` : `
             <li><a href="#/login" aria-label="Login to your account">Login</a></li>
             <li><a href="#/register" aria-label="Create a new account">Register</a></li>
           `}
         </ul>
       </nav>
     </header>
   `;
 }
}

customElements.define('app-bar', AppBar);