(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();var ke={exports:{}};(function(t){var e=function(r){var i=Object.prototype,o=i.hasOwnProperty,c=Object.defineProperty||function(s,n,a){s[n]=a.value},l,m=typeof Symbol=="function"?Symbol:{},u=m.iterator||"@@iterator",g=m.asyncIterator||"@@asyncIterator",N=m.toStringTag||"@@toStringTag";function f(s,n,a){return Object.defineProperty(s,n,{value:a,enumerable:!0,configurable:!0,writable:!0}),s[n]}try{f({},"")}catch{f=function(n,a,h){return n[a]=h}}function G(s,n,a,h){var d=n&&n.prototype instanceof J?n:J,p=Object.create(d.prototype),y=new z(h||[]);return c(p,"_invoke",{value:Ee(s,a,y)}),p}r.wrap=G;function M(s,n,a){try{return{type:"normal",arg:s.call(n,a)}}catch(h){return{type:"throw",arg:h}}}var se="suspendedStart",Se="suspendedYield",ae="executing",U="completed",S={};function J(){}function j(){}function I(){}var W={};f(W,u,function(){return this});var V=Object.getPrototypeOf,F=V&&V(V(K([])));F&&F!==i&&o.call(F,u)&&(W=F);var O=I.prototype=J.prototype=Object.create(W);j.prototype=I,c(O,"constructor",{value:I,configurable:!0}),c(I,"constructor",{value:j,configurable:!0}),j.displayName=f(I,N,"GeneratorFunction");function ce(s){["next","throw","return"].forEach(function(n){f(s,n,function(a){return this._invoke(n,a)})})}r.isGeneratorFunction=function(s){var n=typeof s=="function"&&s.constructor;return n?n===j||(n.displayName||n.name)==="GeneratorFunction":!1},r.mark=function(s){return Object.setPrototypeOf?Object.setPrototypeOf(s,I):(s.__proto__=I,f(s,N,"GeneratorFunction")),s.prototype=Object.create(O),s},r.awrap=function(s){return{__await:s}};function H(s,n){function a(p,y,v,_){var w=M(s[p],s,y);if(w.type==="throw")_(w.arg);else{var Z=w.arg,D=Z.value;return D&&typeof D=="object"&&o.call(D,"__await")?n.resolve(D.__await).then(function(P){a("next",P,v,_)},function(P){a("throw",P,v,_)}):n.resolve(D).then(function(P){Z.value=P,v(Z)},function(P){return a("throw",P,v,_)})}}var h;function d(p,y){function v(){return new n(function(_,w){a(p,y,_,w)})}return h=h?h.then(v,v):v()}c(this,"_invoke",{value:d})}ce(H.prototype),f(H.prototype,g,function(){return this}),r.AsyncIterator=H,r.async=function(s,n,a,h,d){d===void 0&&(d=Promise);var p=new H(G(s,n,a,h),d);return r.isGeneratorFunction(n)?p:p.next().then(function(y){return y.done?y.value:p.next()})};function Ee(s,n,a){var h=se;return function(p,y){if(h===ae)throw new Error("Generator is already running");if(h===U){if(p==="throw")throw y;return de()}for(a.method=p,a.arg=y;;){var v=a.delegate;if(v){var _=le(v,a);if(_){if(_===S)continue;return _}}if(a.method==="next")a.sent=a._sent=a.arg;else if(a.method==="throw"){if(h===se)throw h=U,a.arg;a.dispatchException(a.arg)}else a.method==="return"&&a.abrupt("return",a.arg);h=ae;var w=M(s,n,a);if(w.type==="normal"){if(h=a.done?U:Se,w.arg===S)continue;return{value:w.arg,done:a.done}}else w.type==="throw"&&(h=U,a.method="throw",a.arg=w.arg)}}}function le(s,n){var a=n.method,h=s.iterator[a];if(h===l)return n.delegate=null,a==="throw"&&s.iterator.return&&(n.method="return",n.arg=l,le(s,n),n.method==="throw")||a!=="return"&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),S;var d=M(h,s.iterator,n.arg);if(d.type==="throw")return n.method="throw",n.arg=d.arg,n.delegate=null,S;var p=d.arg;if(!p)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,S;if(p.done)n[s.resultName]=p.value,n.next=s.nextLoc,n.method!=="return"&&(n.method="next",n.arg=l);else return p;return n.delegate=null,S}ce(O),f(O,N,"Generator"),f(O,u,function(){return this}),f(O,"toString",function(){return"[object Generator]"});function Le(s){var n={tryLoc:s[0]};1 in s&&(n.catchLoc=s[1]),2 in s&&(n.finallyLoc=s[2],n.afterLoc=s[3]),this.tryEntries.push(n)}function Y(s){var n=s.completion||{};n.type="normal",delete n.arg,s.completion=n}function z(s){this.tryEntries=[{tryLoc:"root"}],s.forEach(Le,this),this.reset(!0)}r.keys=function(s){var n=Object(s),a=[];for(var h in n)a.push(h);return a.reverse(),function d(){for(;a.length;){var p=a.pop();if(p in n)return d.value=p,d.done=!1,d}return d.done=!0,d}};function K(s){if(s){var n=s[u];if(n)return n.call(s);if(typeof s.next=="function")return s;if(!isNaN(s.length)){var a=-1,h=function d(){for(;++a<s.length;)if(o.call(s,a))return d.value=s[a],d.done=!1,d;return d.value=l,d.done=!0,d};return h.next=h}}return{next:de}}r.values=K;function de(){return{value:l,done:!0}}return z.prototype={constructor:z,reset:function(s){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(Y),!s)for(var n in this)n.charAt(0)==="t"&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=l)},stop:function(){this.done=!0;var s=this.tryEntries[0],n=s.completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(s){if(this.done)throw s;var n=this;function a(_,w){return p.type="throw",p.arg=s,n.next=_,w&&(n.method="next",n.arg=l),!!w}for(var h=this.tryEntries.length-1;h>=0;--h){var d=this.tryEntries[h],p=d.completion;if(d.tryLoc==="root")return a("end");if(d.tryLoc<=this.prev){var y=o.call(d,"catchLoc"),v=o.call(d,"finallyLoc");if(y&&v){if(this.prev<d.catchLoc)return a(d.catchLoc,!0);if(this.prev<d.finallyLoc)return a(d.finallyLoc)}else if(y){if(this.prev<d.catchLoc)return a(d.catchLoc,!0)}else if(v){if(this.prev<d.finallyLoc)return a(d.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(s,n){for(var a=this.tryEntries.length-1;a>=0;--a){var h=this.tryEntries[a];if(h.tryLoc<=this.prev&&o.call(h,"finallyLoc")&&this.prev<h.finallyLoc){var d=h;break}}d&&(s==="break"||s==="continue")&&d.tryLoc<=n&&n<=d.finallyLoc&&(d=null);var p=d?d.completion:{};return p.type=s,p.arg=n,d?(this.method="next",this.next=d.finallyLoc,S):this.complete(p)},complete:function(s,n){if(s.type==="throw")throw s.arg;return s.type==="break"||s.type==="continue"?this.next=s.arg:s.type==="return"?(this.rval=this.arg=s.arg,this.method="return",this.next="end"):s.type==="normal"&&n&&(this.next=n),S},finish:function(s){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.finallyLoc===s)return this.complete(a.completion,a.afterLoc),Y(a),S}},catch:function(s){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc===s){var h=a.completion;if(h.type==="throw"){var d=h.arg;Y(a)}return d}}throw new Error("illegal catch attempt")},delegateYield:function(s,n,a){return this.delegate={iterator:K(s),resultName:n,nextLoc:a},this.method==="next"&&(this.arg=l),S}},r}(t.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})(ke);class Te extends HTMLElement{constructor(){super(),this._onLogoutClick=this._onLogoutClick.bind(this)}connectedCallback(){this._isLoggedIn=localStorage.getItem("STORY_APP")!==null,this._render(),this._setupNavigationEvents(),window.addEventListener("hashchange",this._checkLoginStatus.bind(this)),document.addEventListener("user-login",this._handleUserLogin.bind(this)),document.addEventListener("user-logout",this._handleUserLogout.bind(this))}disconnectedCallback(){this._removeNavigationEvents(),window.removeEventListener("hashchange",this._checkLoginStatus.bind(this)),document.removeEventListener("user-login",this._handleUserLogin.bind(this)),document.removeEventListener("user-logout",this._handleUserLogout.bind(this))}_checkLoginStatus(){const e=localStorage.getItem("STORY_APP")!==null;this._isLoggedIn!==e&&(this._isLoggedIn=e,this._render(),this._setupNavigationEvents())}_handleUserLogin(){this._isLoggedIn=!0,this._render(),this._setupNavigationEvents()}_handleUserLogout(){this._isLoggedIn=!1,this._render(),this._setupNavigationEvents()}_setupNavigationEvents(){const e=this.querySelector(".logout-button");e&&e.addEventListener("click",this._onLogoutClick)}_removeNavigationEvents(){const e=this.querySelector(".logout-button");e&&e.removeEventListener("click",this._onLogoutClick)}_onLogoutClick(e){e.preventDefault(),localStorage.removeItem("STORY_APP");const r=new CustomEvent("user-logout");document.dispatchEvent(r),window.location.hash="#/login"}_render(){this.innerHTML=`
     <header class="app-bar">
       <div class="app-bar__brand">
         <h1>Story App</h1>
       </div>
       <nav class="app-bar__navigation" aria-label="main navigation">
         <ul>
           ${this._isLoggedIn?`
             <li><a href="#/home" aria-label="View stories">Stories</a></li>
             <li><a href="#/add" aria-label="Add a new story">Add Story</a></li>
             <li><a href="#/settings" aria-label="Application settings">Pengaturan</a></li>
             <li><button class="logout-button" aria-label="Logout">Logout</button></li>
           `:`
             <li><a href="#/login" aria-label="Login to your account">Login</a></li>
             <li><a href="#/register" aria-label="Create a new account">Register</a></li>
           `}
         </ul>
       </nav>
     </header>
   `}}customElements.define("app-bar",Te);class Ae extends HTMLElement{constructor(){super(),this._render()}connectedCallback(){this._setupEventListeners()}_setupEventListeners(){this.querySelector(".skip-link").addEventListener("click",r=>{r.preventDefault();const i=document.querySelector("#mainContent");i.focus(),i.scrollIntoView({behavior:"smooth"})})}_render(){this.innerHTML=`
        <a href="#mainContent" class="skip-link">Skip to content</a>
      `}}customElements.define("skip-content",Ae);const b={BASE_URL:"https://story-api.dicoding.dev/v1",STORAGE_KEY:"STORY_APP",DEFAULT_LANGUAGE:"id-id",MAP_KEY:"YOUR_MAP_API_KEY"},R={REGISTER:"/register",LOGIN:"/login",GET_ALL_STORIES:"/stories",ADD_STORY:"/stories",DETAIL_STORY:t=>`/stories/${t}`};class C{static async register({name:e,email:r,password:i}){try{return await(await fetch(`${b.BASE_URL}${R.REGISTER}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:r,password:i})})).json()}catch(o){return{error:!0,message:o.message}}}static async login({email:e,password:r}){try{return await(await fetch(`${b.BASE_URL}${R.LOGIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r})})).json()}catch(i){return{error:!0,message:i.message}}}static async getAllStories({page:e=1,size:r=10,location:i=0}={}){try{const o=localStorage.getItem(b.STORAGE_KEY),c=JSON.parse(o).token,l=new URL(`${b.BASE_URL}${R.GET_ALL_STORIES}`);return l.searchParams.append("page",e),l.searchParams.append("size",r),l.searchParams.append("location",i),await(await fetch(l,{method:"GET",headers:{Authorization:`Bearer ${c}`}})).json()}catch(o){return{error:!0,message:o.message}}}static async getDetailStory(e){try{const r=localStorage.getItem(b.STORAGE_KEY),i=JSON.parse(r).token,o=await fetch(`${b.BASE_URL}${R.DETAIL_STORY(e)}`,{method:"GET",headers:{Authorization:`Bearer ${i}`}});return o.ok?await o.json():o.status===404?{error:!0,message:"Story not found"}:{error:!0,message:`Server returned ${o.status}`}}catch(r){return{error:!0,message:r.message}}}static async addStory({description:e,photo:r,lat:i,lon:o}){try{const c=localStorage.getItem(b.STORAGE_KEY),l=JSON.parse(c).token,m=new FormData;return m.append("description",e),m.append("photo",r),i&&m.append("lat",i),o&&m.append("lon",o),await(await fetch(`${b.BASE_URL}${R.ADD_STORY}`,{method:"POST",headers:{Authorization:`Bearer ${l}`},body:m})).json()}catch(c){return{error:!0,message:c.message}}}static async subscribeNotification(e){try{const r=localStorage.getItem(b.STORAGE_KEY),i=JSON.parse(r).token,o=e.toJSON();return await(await fetch(`${b.BASE_URL}/notifications/subscribe`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({endpoint:o.endpoint,keys:{p256dh:o.keys.p256dh,auth:o.keys.auth}})})).json()}catch(r){return{error:!0,message:r.message}}}static async unsubscribeNotification(e){try{const r=localStorage.getItem(b.STORAGE_KEY),i=JSON.parse(r).token;return await(await fetch(`${b.BASE_URL}/notifications/subscribe`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({endpoint:e})})).json()}catch(r){return{error:!0,message:r.message}}}}const Ie="BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk";function Pe(t){const e="=".repeat((4-t.length%4)%4),r=(t+e).replace(/-/g,"+").replace(/_/g,"/"),i=window.atob(r),o=new Uint8Array(i.length);for(let c=0;c<i.length;++c)o[c]=i.charCodeAt(c);return o}async function oe(){if("serviceWorker"in navigator)try{const t=await navigator.serviceWorker.register("/sw.js");return console.log("Service Worker berhasil didaftarkan:",t),t}catch(t){throw console.error("Gagal mendaftarkan Service Worker:",t),t}else throw new Error("Service Worker tidak didukung di browser ini")}async function Ce(){if(!("Notification"in window))throw new Error("Browser ini tidak mendukung notifikasi");if(Notification.permission==="granted")return!0;if(Notification.permission==="denied")throw new Error("Pengguna telah menolak izin notifikasi");return await Notification.requestPermission()==="granted"}async function Oe(t){const e=await t.pushManager.getSubscription();return e||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pe(Ie)})}async function ye(){try{await Ce();const t=await oe(),e=await Oe(t);return await C.subscribeNotification(e)}catch(t){throw console.error("Gagal mendaftarkan notifikasi:",t),t}}async function ve(){try{const t=await navigator.serviceWorker.getRegistration();if(!t)throw new Error("Service Worker tidak terdaftar");const e=await t.pushManager.getSubscription();if(!e)throw new Error("Tidak ada subscription yang aktif");const r=await C.unsubscribeNotification(e.endpoint);return await e.unsubscribe(),r}catch(t){throw console.error("Gagal berhenti berlangganan notifikasi:",t),t}}const Be=Object.freeze(Object.defineProperty({__proto__:null,registerServiceWorker:oe,subscribeToNotifications:ye,unsubscribeFromNotifications:ve},Symbol.toStringTag,{value:"Module"}));class Ne extends HTMLElement{constructor(){super(),this._notificationEnabled=this._getNotificationSetting()}connectedCallback(){this._render(),this._initSettings()}_getNotificationSetting(){return localStorage.getItem("NOTIFICATION_ENABLED")==="true"}_saveNotificationSetting(e){localStorage.setItem("NOTIFICATION_ENABLED",e),this._notificationEnabled=e}async _requestNotificationPermission(){try{if(await Notification.requestPermission()==="granted")try{const r=await ye();console.log("✅ Berhasil subscribe:",r),this._saveNotificationSetting(!0),alert("Notifikasi berhasil diaktifkan!")}catch(r){console.error("Gagal subscribe notifikasi:",r),alert(`Gagal mengaktifkan notifikasi: ${r.message}`),this._saveNotificationSetting(!1)}else this._saveNotificationSetting(!1),alert("Izin notifikasi ditolak oleh pengguna.");this._render(),this._initSettings()}catch(e){console.error("Error saat meminta izin notifikasi:",e),alert("Terjadi kesalahan saat meminta izin notifikasi.")}}_initSettings(){const e=this.querySelector("#notificationToggle");e&&(e.checked=this._notificationEnabled,e.addEventListener("change",async r=>{if(r.target.checked)await this._requestNotificationPermission();else try{await ve(),this._saveNotificationSetting(!1),alert("Notifikasi dinonaktifkan.")}catch(i){console.error("Gagal menonaktifkan notifikasi:",i),alert(`Gagal menonaktifkan notifikasi: ${i.message}`)}}))}_render(){this.innerHTML=`
      <div class="settings-page">
        <h2>Pengaturan Aplikasi</h2>
        
        <div class="settings-section">
          <h3>Notifikasi</h3>
          <div class="setting-item">
            <label for="notificationToggle" class="toggle-label">
              Aktifkan Notifikasi
              <div class="toggle-description">
                Dapatkan notifikasi saat ada cerita baru atau pembaruan penting.
              </div>
            </label>
            <div class="toggle-switch">
              <input 
                type="checkbox" 
                id="notificationToggle" 
                ${this._notificationEnabled?"checked":""}
                aria-label="Aktifkan notifikasi"
              >
              <label for="notificationToggle" class="toggle-slider"></label>
            </div>
          </div>
          <p class="setting-info">
            ${Notification.permission==="denied"?"Notifikasi diblokir oleh browser. Silakan ubah pengaturan izin di browser Anda.":"Aktifkan notifikasi untuk mendapatkan pembaruan terbaru."}
          </p>
        </div>
        
        <div class="settings-section">
          <h3>Tentang Aplikasi</h3>
          <p>Story App v1.0.1</p>
          <p>Aplikasi berbagi cerita dengan fitur lokasi dan foto.</p>
        </div>
      </div>
    `}}customElements.define("settings-page",Ne);class q{constructor({userId:e,name:r,token:i}){this.userId=e,this.name=r,this.token=i}static fromLoginResponse(e){return new q({userId:e.userId,name:e.name,token:e.token})}saveToStorage(){localStorage.setItem("STORY_APP",JSON.stringify({userId:this.userId,name:this.name,token:this.token}))}static isLoggedIn(){return localStorage.getItem("STORY_APP")!==null}static getLoggedInUser(){const e=JSON.parse(localStorage.getItem("STORY_APP"));return e?new q({userId:e.userId,name:e.name,token:e.token}):null}}class Me{constructor({view:e}){this._view=e}async init(){this._view.setupEventListeners(this._onLogin.bind(this))}async _onLogin(e){e.preventDefault();const r=this._view.getCredentials();try{this._view.showLoading();const i=await C.login(r);if(i.error){this._view.showError(i.message);return}const o=q.fromLoginResponse(i.loginResult);o.saveToStorage();const c=new CustomEvent("user-login",{detail:{user:o}});document.dispatchEvent(c),window.location.hash="#/home"}catch(i){this._view.showError("An error occurred. Please try again."),console.error(i)}finally{this._view.hideLoading()}}}const De=()=>`
  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          aria-required="true"
          aria-label="Enter your email address"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required 
          aria-required="true"
          aria-label="Enter your password"
          minlength="8"
        />
      </div>
      <div class="form-group">
        <button 
          type="submit" 
          aria-label="Sign in to your account"
        >
          Login
        </button>
      </div>
    </form>
    <p>Don't have an account? <a href="#/register" aria-label="Go to registration page">Register here</a></p>
  </div>
`,$=()=>{document.startViewTransition&&document.startViewTransition(()=>{const t=document.getElementById("mainContent");t&&(t.classList.add("page-transition"),setTimeout(()=>{t.classList.remove("page-transition")},300))})},ue={async render(){return`
      <section class="content" id="mainContent">
        <div class="login-page">
          ${De()}
        </div>
      </section>
    `},async afterRender(){$(),this._presenter=new Me({view:this}),await this._presenter.init()},setupEventListeners(t){const e=document.querySelector("#loginForm");e&&e.addEventListener("submit",t)},getCredentials(){return{email:document.getElementById("email").value,password:document.getElementById("password").value}},showLoading(){const t=document.querySelector('#loginForm button[type="submit"]');t.textContent="Logging in...",t.disabled=!0},hideLoading(){const t=document.querySelector('#loginForm button[type="submit"]');t.textContent="Login",t.disabled=!1},showError(t){let e=document.querySelector(".error-message");e||(e=document.createElement("p"),e.classList.add("error-message"),document.querySelector("#loginForm").insertAdjacentElement("afterbegin",e)),e.textContent=t}};class Re{constructor({view:e}){this._view=e}async init(){this._view.setupEventListeners(this._onRegister.bind(this))}async _onRegister(e){e.preventDefault();const r=this._view.getFormData();try{this._view.showLoading();const i=await C.register(r);if(i.error){this._view.showError(i.message);return}this._view.showSuccess("Registration successful! Please login."),setTimeout(()=>{window.location.hash="#/login"},2e3)}catch(i){this._view.showError("An error occurred. Please try again."),console.error(i)}finally{this._view.hideLoading()}}}const qe=()=>`
  <div class="register-container">
    <h2>Register</h2>
    <form id="registerForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          aria-required="true"
          aria-label="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          aria-required="true"
          aria-label="Enter your email address"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required 
          aria-required="true"
          aria-label="Create a password (minimum 8 characters)"
          minlength="8"
        />
        <p class="helper-text">Password must be at least 8 characters</p>
      </div>
      <div class="form-group">
        <button 
          type="submit" 
          aria-label="Create your account"
        >
          Register
        </button>
      </div>
    </form>
    <p>Already have an account? <a href="#/login" aria-label="Go to login page">Login here</a></p>
  </div>
`,$e={async render(){return`
      <section class="content" id="mainContent">
        <div class="register-page">
          ${qe()}
        </div>
      </section>
    `},async afterRender(){$(),this._presenter=new Re({view:this}),await this._presenter.init()},setupEventListeners(t){const e=document.querySelector("#registerForm");e&&e.addEventListener("submit",t)},getFormData(){return{name:document.getElementById("name").value,email:document.getElementById("email").value,password:document.getElementById("password").value}},showLoading(){const t=document.querySelector('#registerForm button[type="submit"]');t.textContent="Registering...",t.disabled=!0},hideLoading(){const t=document.querySelector('#registerForm button[type="submit"]');t.textContent="Register",t.disabled=!1},showError(t){let e=document.querySelector(".error-message");e||(e=document.createElement("p"),e.classList.add("error-message"),document.querySelector("#registerForm").insertAdjacentElement("afterbegin",e)),e.textContent=t},showSuccess(t){let e=document.querySelector(".success-message");e||(e=document.createElement("p"),e.classList.add("success-message"),document.querySelector("#registerForm").insertAdjacentElement("afterbegin",e)),e.textContent=t}};class k{constructor({id:e,name:r,description:i,photoUrl:o,createdAt:c,lat:l,lon:m}){this.id=e,this.name=r,this.description=i,this.photoUrl=o,this.createdAt=new Date(c),this.lat=l,this.lon=m}static fromApiResponse(e){return new k({id:e.id,name:e.name,description:e.description,photoUrl:e.photoUrl,createdAt:e.createdAt,lat:e.lat,lon:e.lon})}static fromApiResponseList(e){return e.map(r=>this.fromApiResponse(r))}get hasLocation(){return this.lat!==null&&this.lon!==null}get formattedDate(){const e={weekday:"long",year:"numeric",month:"long",day:"numeric"};try{return this.createdAt.toLocaleDateString("id-ID",e)}catch(r){return console.error("Error formatting date:",r),"Invalid date"}}}const Ge=(t,e)=>e.some(r=>t instanceof r);let he,me;function Ue(){return he||(he=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function je(){return me||(me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const we=new WeakMap,te=new WeakMap,_e=new WeakMap,Q=new WeakMap,ne=new WeakMap;function Fe(t){const e=new Promise((r,i)=>{const o=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{r(A(t.result)),o()},l=()=>{i(t.error),o()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(r=>{r instanceof IDBCursor&&we.set(r,t)}).catch(()=>{}),ne.set(e,t),e}function He(t){if(te.has(t))return;const e=new Promise((r,i)=>{const o=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{r(),o()},l=()=>{i(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});te.set(t,e)}let re={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return te.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_e.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return A(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xe(t){re=t(re)}function Je(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const i=t.call(X(this),e,...r);return _e.set(i,e.sort?e.sort():[e]),A(i)}:je().includes(t)?function(...e){return t.apply(X(this),e),A(we.get(this))}:function(...e){return A(t.apply(X(this),e))}}function We(t){return typeof t=="function"?Je(t):(t instanceof IDBTransaction&&He(t),Ge(t,Ue())?new Proxy(t,re):t)}function A(t){if(t instanceof IDBRequest)return Fe(t);if(Q.has(t))return Q.get(t);const e=We(t);return e!==t&&(Q.set(t,e),ne.set(e,t)),e}const X=t=>ne.get(t);function Ve(t,e,{blocked:r,upgrade:i,blocking:o,terminated:c}={}){const l=indexedDB.open(t,e),m=A(l);return i&&l.addEventListener("upgradeneeded",u=>{i(A(l.result),u.oldVersion,u.newVersion,A(l.transaction),u)}),r&&l.addEventListener("blocked",u=>r(u.oldVersion,u.newVersion,u)),m.then(u=>{c&&u.addEventListener("close",()=>c()),o&&u.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const Ye=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],ee=new Map;function pe(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ee.get(e))return ee.get(e);const r=e.replace(/FromIndex$/,""),i=e!==r,o=ze.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Ye.includes(r)))return;const c=async function(l,...m){const u=this.transaction(l,o?"readwrite":"readonly");let g=u.store;return i&&(g=g.index(m.shift())),(await Promise.all([g[r](...m),o&&u.done]))[0]};return ee.set(e,c),c}xe(t=>({...t,get:(e,r,i)=>pe(e,r)||t.get(e,r,i),has:(e,r)=>!!pe(e,r)||t.has(e,r)}));const Ke="story-app-db",Ze=1,T="stories",B=Ve(Ke,Ze,{upgrade(t){t.createObjectStore(T,{keyPath:"id"})}}),E={async getStories(){return(await B).getAll(T)},async getStoryById(t){return t?(await B).get(T,t):null},async saveStories(t){const r=(await B).transaction(T,"readwrite"),i=r.objectStore(T);return t.forEach(o=>{i.put(o)}),await r.done,t},async saveStory(t){return(await B).put(T,t)},async deleteStory(t){return(await B).delete(T,t)},async clearStories(){return(await B).clear(T)},async searchStories(t){return(await this.getStories()).filter(r=>{const i=t.toLowerCase();return r.name.toLowerCase().includes(i)||r.description.toLowerCase().includes(i)})}};class Qe{constructor({view:e}){this._view=e,this._stories=[]}async init(){await this._loadStories()}async _loadStories(){try{this._view.showLoading();const e=await C.getAllStories({location:1});if(!e||e.error){console.log("Gagal mengambil data dari API, mencoba dari cache...");const r=await E.getStories();if(r&&r.length>0){this._stories=r.map(o=>new k(o)),this._view.renderStories(this._stories),this._stories.some(o=>o.hasLocation)&&this._view.renderMap(this._stories),this._view.showInfo("Menampilkan data dari cache. Silakan refresh halaman ketika online.");return}const i=(e==null?void 0:e.message)||"Gagal memuat cerita";this._view.showError(i);return}if(!e.listStory||!Array.isArray(e.listStory)){this._view.showError("Format data tidak valid dari server");return}this._stories=e.listStory.map(r=>new k({id:r.id||"",name:r.name||"Unknown",description:r.description||"",photoUrl:r.photoUrl||"",createdAt:r.createdAt||new Date().toISOString(),lat:r.lat||null,lon:r.lon||null})),await E.saveStories(this._stories),this._view.renderStories(this._stories),this._view.renderMap(this._stories)}catch(e){console.error("Error loading stories:",e);const r=await E.getStories();r&&r.length>0?(this._stories=r.map(i=>new k(i)),this._view.renderStories(this._stories),this._stories.some(i=>i.hasLocation)&&this._view.renderMap(this._stories),this._view.showInfo("Menampilkan data dari cache. Silakan refresh halaman ketika online.")):this._view.showError("Gagal memuat cerita. Silakan coba lagi nanti.")}finally{this._view.hideLoading()}}async deleteStory(e){try{this._view.showLoading(),await E.deleteStory(e),this._stories=this._stories.filter(r=>r.id!==e),this._view.renderStories(this._stories),this._view.showInfo("Cerita berhasil dihapus dari cache.")}catch(r){console.error("Error deleting story:",r),this._view.showError("Gagal menghapus cerita dari cache.")}finally{this._view.hideLoading()}}async searchStories(e){try{if(this._view.showLoading(),e){const r=await E.searchStories(e);this._stories=r.map(i=>new k(i))}else{const r=await E.getStories();this._stories=r.map(i=>new k(i))}this._view.renderStories(this._stories),this._stories.length===0&&this._view.showInfo("Tidak ada cerita yang sesuai dengan pencarian.")}catch(r){console.error("Error searching stories:",r),this._view.showError("Gagal mencari cerita.")}finally{this._view.hideLoading()}}}const Xe=()=>`
  <div class="home-container">
    <h2 class="story-title">Stories</h2>
    <div class="story-map-container">
      <h3>Story Locations</h3>
      <story-map id="storyMap"></story-map>
    </div>
    <div class="story-list" id="storyList">
      <p class="loading-text">Loading stories...</p>
    </div>
  </div>
`;class et extends HTMLElement{constructor(){super(),this._story=null,this._mapElement=null}set story(e){this._story=e,this.render(),this._story.hasLocation&&this._initMap()}async _initMap(){await new Promise(o=>setTimeout(o,100));const e=`map-${this._story.id.replace(/[^a-zA-Z0-9]/g,"")}`;if(!this.querySelector(`#${e}`))return;const i=L.map(e,{zoomControl:!1,dragging:!1,scrollWheelZoom:!1}).setView([this._story.lat,this._story.lon],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),L.marker([this._story.lat,this._story.lon]).addTo(i).bindPopup(`
          <div class="map-popup">
            <h4>${this._story.name}</h4>
            <p>${this._shortenText(this._story.description,50)}</p>
          </div>
        `)}render(){const e=encodeURIComponent(this._story.id),r=`map-${this._story.id.replace(/[^a-zA-Z0-9]/g,"")}`;this.innerHTML=`
        <article class="story-item">
          <div class="story-item__thumbnail">
            <img 
              src="${this._story.photoUrl}" 
              alt="Photo by ${this._story.name}" 
              crossorigin="anonymous"
              loading="lazy"
            >
          </div>
          <div class="story-item__content">
            <h3 class="story-item__title">
              <a href="#/detail/${e}" aria-label="View story by ${this._story.name}">${this._story.name}</a>
            </h3>
            <p class="story-item__date">${this._story.formattedDate}</p>
            <p class="story-item__description">${this._shortenText(this._story.description,100)}</p>
            ${this._story.hasLocation?`
              <div class="story-item__map-container">
                <div id="${r}" class="story-item__map"></div>
              </div>
            `:""}
          </div>
        </article>
      `}_shortenText(e,r){return e.length<=r?e:e.substr(0,r)+"..."}}customElements.define("story-item",et);class tt extends HTMLElement{constructor(){super(),this._map=null,this._markers=[]}set stories(e){this._stories=e.filter(r=>r.hasLocation),this._initMap()}set story(e){this._stories=e.hasLocation?[e]:[],this._initMap()}connectedCallback(){this._render()}_render(){this.innerHTML=`
        <div id="map" class="map-container"></div>
      `}async _initMap(){if(!this._stories||this._stories.length===0)return;await new Promise(r=>setTimeout(r,100)),this._map||(this._map=L.map("map"),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this._map)),this._markers.forEach(r=>this._map.removeLayer(r)),this._markers=[];const e=L.latLngBounds();this._stories.forEach(r=>{if(r.hasLocation){const i=L.marker([r.lat,r.lon]).addTo(this._map).bindPopup(`
              <div class="map-popup">
                <h4>${r.name}</h4>
                <p>${this._shortenText(r.description,50)}</p>
                <a href="#/detail/${r.id}" aria-label="View full story by ${r.name}">View details</a>
              </div>
            `);this._markers.push(i),e.extend([r.lat,r.lon])}}),this._markers.length>0&&this._map.fitBounds(e,{padding:[50,50]})}_shortenText(e,r){return e.length<=r?e:e.substr(0,r)+"..."}}customElements.define("story-map",tt);const rt={async render(){return`
      <section class="content" id="mainContent">
        <div class="home-page">
          ${Xe()}
        </div>
      </section>
    `},async afterRender(){$(),this._presenter=new Qe({view:this}),await this._presenter.init()},showLoading(){const t=document.querySelector(".loading-text");t&&(t.style.display="block")},hideLoading(){const t=document.querySelector(".loading-text");t&&(t.style.display="none")},showError(t){const e=document.querySelector("#storyList");e&&(e.innerHTML=`<p class="error-message">${t}</p>`)},renderStories(t){const e=document.querySelector("#storyList");if(e){if(t.length===0){e.innerHTML='<p class="empty-message">No stories found.</p>';return}e.innerHTML="",t.forEach(r=>{const i=document.createElement("story-item");i.story=r,e.appendChild(i)})}},renderMap(t){const e=document.querySelector("#storyMap");e&&(e.stories=t)}};class it{constructor({view:e,id:r}){this._view=e,this._id=r,this._story=null}async init(){await this._loadStory()}async _loadStory(){try{this._view.showLoading();const e=await C.getDetailStory(this._id);if(!e||e.error){console.log("Gagal mengambil data dari API, mencoba dari cache...");const r=await E.getStoryById(this._id);if(r){this._story=new k(r),this._view.renderStory(this._story),this._story.hasLocation&&this._view.renderMap(this._story),this._view.showInfo("Menampilkan data dari cache. Silakan refresh halaman ketika online.");return}const i=(e==null?void 0:e.message)||"Gagal memuat detail cerita";this._view.showError(i);return}if(!e.story){this._view.showError("Format data tidak valid dari server");return}this._story=k.fromApiResponse(e.story),await E.saveStory(this._story),this._view.renderStory(this._story),this._story.hasLocation&&this._view.renderMap(this._story)}catch(e){console.error("Error loading story detail:",e);const r=await E.getStoryById(this._id);r?(this._story=new k(r),this._view.renderStory(this._story),this._story.hasLocation&&this._view.renderMap(this._story),this._view.showInfo("Menampilkan data dari cache. Silakan refresh halaman ketika online.")):this._view.showError("Gagal memuat detail cerita. Silakan coba lagi nanti.")}finally{this._view.hideLoading()}}}const ot=t=>`
  <div class="detail-container">
    <div class="detail-header">
      <h2>${t.name}</h2>
      <p class="detail-date">${t.formattedDate}</p>
    </div>
    <div class="detail-content">
      <div class="detail-image">
        <img 
          src="${t.photoUrl}" 
          alt="Photo by ${t.name}" 
          crossorigin="anonymous"
        />
      </div>
      <div class="detail-description">
        <p>${t.description}</p>
      </div>
      ${t.hasLocation?`
        <div class="detail-location">
          <h3>Location</h3>
          <story-map id="detailMap"></story-map>
        </div>
      `:""}
    </div>
    <div class="detail-actions">
      <a href="#/home" class="back-button" aria-label="Back to stories list">Back to List</a>
    </div>
  </div>
`,ie={parseActiveUrlWithCombiner(){const t=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(t);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner(){const e=window.location.hash.slice(1).split("/");e[1]&&(e[1]=e[1].toLowerCase());const r=e.join("/");return this._urlSplitter(r)},_urlSplitter(t){const e=t.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner(t){return(t.resource?`/${t.resource}`:"/")+(t.id?"/:id":"")+(t.verb?`/${t.verb}`:"")}},nt={async render(){return`
      <section class="content" id="mainContent">
        <div class="detail-page">
          <p class="loading-text">Loading story...</p>
        </div>
      </section>
    `},async afterRender(){$();const t=ie.parseActiveUrlWithoutCombiner(),e=t.id?decodeURIComponent(t.id):null;this._presenter=new it({view:this,id:e}),await this._presenter.init()},showLoading(){const t=document.querySelector(".loading-text");t&&(t.style.display="block")},hideLoading(){const t=document.querySelector(".loading-text");t&&(t.style.display="none")},showError(t){const e=document.querySelector(".detail-page");e&&(e.innerHTML=`
        <div class="error-container">
          <p class="error-message">${t}</p>
          <a href="#/home" class="back-button">Back to Home</a>
        </div>
      `)},renderStory(t){const e=document.querySelector(".detail-page");e&&(e.innerHTML=ot(t))},renderMap(t){const e=document.querySelector("#detailMap");e&&(e.story=t)}};class st{constructor({view:e}){this._view=e}async init(){this._view.setupForm(this._onSubmitStory.bind(this))}async _onSubmitStory({description:e,photo:r,lat:i,lon:o}){try{this._view.showLoading();const c=await C.addStory({description:e,photo:r,lat:i,lon:o});if(c.error){this._view.showError(c.message);return}this._view.showSuccess("Story added successfully!"),setTimeout(()=>{window.location.hash="#/home"},2e3)}catch(c){this._view.showError("Failed to add story"),console.error(c)}finally{this._view.hideLoading()}}}const at=()=>`
  <div class="add-story-container">
    <h2>Add New Story</h2>
    <story-form id="storyForm"></story-form>
  </div>
`,x={async init(t){this._stream=null,this._videoElement=t;try{return this._stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),this._videoElement.srcObject=this._stream,!0}catch(e){return console.error("Error accessing camera:",e),!1}},takePhoto(){const t=document.createElement("canvas"),e=t.getContext("2d");return t.width=this._videoElement.videoWidth,t.height=this._videoElement.videoHeight,e.drawImage(this._videoElement,0,0,t.width,t.height),new Promise(r=>{t.toBlob(i=>{r(i)},"image/jpeg",.8)})},stop(){this._stream&&(this._stream.getTracks().forEach(t=>{t.stop()}),this._videoElement.srcObject=null,this._stream=null)}},ge={async init(t,e){this._map=L.map(t),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this._map),this._map.setView([-2.5489,118.0149],5),this._marker=null,this._map.on("click",r=>{const{lat:i,lng:o}=r.latlng;this._marker&&this._map.removeLayer(this._marker),this._marker=L.marker([i,o]).addTo(this._map),e&&e(i,o)})},setMarker(t,e){this._map&&(this._marker&&this._map.removeLayer(this._marker),this._marker=L.marker([t,e]).addTo(this._map),this._map.setView([t,e],15))},getUserLocation(){return new Promise((t,e)=>{if(!navigator.geolocation){e(new Error("Geolocation not supported by your browser"));return}navigator.geolocation.getCurrentPosition(r=>{const{latitude:i,longitude:o}=r.coords;this.setMarker(i,o),t({lat:i,lon:o})},r=>{e(r)})})}};class ct extends HTMLElement{constructor(){super(),this._lat=null,this._lon=null,this._photoBlob=null}connectedCallback(){this._render(),this._initForm()}disconnectedCallback(){x.stop()}set submitHandler(e){this._submitHandler=e}async _initForm(){const e=this.querySelector("#cameraButton"),r=this.querySelector("#captureButton"),i=this.querySelector("#cameraView"),o=this.querySelector("#photoPreview");e.addEventListener("click",async()=>{await x.init(i)&&(i.classList.remove("hidden"),o.classList.add("hidden"),r.classList.remove("hidden"),e.textContent="Change Photo")}),r.addEventListener("click",async()=>{this._photoBlob=await x.takePhoto();const u=URL.createObjectURL(this._photoBlob);o.src=u,o.classList.remove("hidden"),i.classList.add("hidden"),x.stop()});const c=this.querySelector("#locationMap");await ge.init(c,(u,g)=>{this._lat=u,this._lon=g,this.querySelector("#latitude").value=u,this.querySelector("#longitude").value=g}),this.querySelector("#locationButton").addEventListener("click",async()=>{try{const{lat:u,lon:g}=await ge.getUserLocation();this._lat=u,this._lon=g,this.querySelector("#latitude").value=u,this.querySelector("#longitude").value=g}catch(u){console.error("Error getting location:",u),alert("Could not get your location. Please select on the map.")}}),this.querySelector("form").addEventListener("submit",u=>{u.preventDefault();const g=this.querySelector("#description").value;if(!g){alert("Please enter a description");return}if(!this._photoBlob){alert("Please take a photo");return}this._submitHandler&&this._submitHandler({description:g,photo:this._photoBlob,lat:this._lat,lon:this._lon})})}_render(){this.innerHTML=`
      <form class="story-form">
        <div class="form-group">
          <label for="description">Story Description:</label>
          <textarea 
            id="description" 
            name="description" 
            rows="4" 
            required 
            aria-required="true"
            aria-label="Enter your story description"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label>Photo:</label>
          <div class="camera-container">
            <video 
              id="cameraView" 
              autoplay 
              class="hidden" 
              aria-label="Camera preview"
            ></video>
            <img 
              id="photoPreview" 
              class="hidden" 
              alt="Preview of your photo" 
            />
            <div class="camera-controls">
              <button 
                type="button" 
                id="cameraButton" 
                aria-label="Activate camera"
              >
                Take Photo
              </button>
              <button 
                type="button" 
                id="captureButton" 
                class="hidden" 
                aria-label="Capture photo"
              >
                Capture
              </button>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label>Location:</label>
          <div class="location-container">
            <div id="locationMap" class="location-map" aria-label="Map to choose location"></div>
            <div class="location-controls">
              <button 
                type="button" 
                id="locationButton" 
                aria-label="Use your current location"
              >
                Use My Location
              </button>
              <div class="location-info">
                <div class="form-group">
                  <label for="latitude">Latitude:</label>
                  <input 
                    type="text" 
                    id="latitude" 
                    name="latitude" 
                    readonly 
                    aria-label="Selected latitude"
                  />
                </div>
                <div class="form-group">
                  <label for="longitude">Longitude:</label>
                  <input 
                    type="text" 
                    id="longitude" 
                    name="longitude" 
                    readonly 
                    aria-label="Selected longitude"
                  />
                </div>
              </div>
            </div>
          </div>
          <p class="helper-text">Click on the map to select location or use "Use My Location" button</p>
        </div>
        
        <div class="form-group">
          <button 
            type="submit" 
            class="submit-button" 
            aria-label="Submit your story"
          >
            Submit Story
          </button>
        </div>
      </form>
    `}}customElements.define("story-form",ct);const lt={async render(){return`
      <section class="content" id="mainContent">
        <div class="add-story-page">
          ${at()}
        </div>
      </section>
    `},async afterRender(){$(),this._presenter=new st({view:this}),await this._presenter.init()},setupForm(t){const e=document.querySelector("story-form");e&&(e.submitHandler=t)},showLoading(){const t=document.querySelector(".submit-button");t.textContent="Submitting...",t.disabled=!0},hideLoading(){const t=document.querySelector(".submit-button");t.textContent="Submit Story",t.disabled=!1},showError(t){let e=document.querySelector(".error-message");e||(e=document.createElement("p"),e.classList.add("error-message"),document.querySelector(".story-form").insertAdjacentElement("afterbegin",e)),e.textContent=t},showSuccess(t){let e=document.querySelector(".success-message");e||(e=document.createElement("p"),e.classList.add("success-message"),document.querySelector(".story-form").insertAdjacentElement("afterbegin",e)),e.textContent=t}},dt={"/":ue,"/login":ue,"/register":$e,"/home":rt,"/detail/:id":nt,"/add":lt,"/settings":{render:()=>`
        <div id="mainContent" tabindex="-1">
          <settings-page></settings-page>
        </div>
      `,afterRender:()=>{}}};class ut extends HTMLElement{constructor(){super(),this._stories=[]}connectedCallback(){this.render(),this._initListeners(),this._loadCachedStories()}async _loadCachedStories(){try{this._stories=await E.getStories(),this._updateStorageInfo()}catch(e){console.error("Error loading cached stories:",e)}}_updateStorageInfo(){const e=this.querySelector("#storage-info");e&&(e.textContent=`${this._stories.length} cerita tersimpan dalam cache`)}_initListeners(){const e=this.querySelector("#clear-cache-button");e&&e.addEventListener("click",async()=>{try{await E.clearStories(),this._stories=[],this._updateStorageInfo();const r=document.createElement("div");r.classList.add("success-message"),r.textContent="Cache berhasil dihapus",this.appendChild(r),setTimeout(()=>{r.remove()},3e3)}catch(r){console.error("Error clearing cache:",r)}})}render(){this.innerHTML=`
      <div class="offline-manager">
        <h3>Pengelolaan Data Offline</h3>
        <div id="storage-info">Memuat informasi cache...</div>
        <button id="clear-cache-button" class="button">Hapus Semua Cache</button>
      </div>
    `}}customElements.define("offline-manager",ut);class ht{constructor({content:e}){this._content=e,this._initialAppShell()}_initialAppShell(){document.querySelector("app-bar").addEventListener("connected",()=>{})}_checkAuth(){const e=q.isLoggedIn(),r=ie.parseActiveUrlWithCombiner(),i=["/","/login","/register"];return!e&&["/home","/detail/:id","/add"].includes(r)?(window.location.hash="#/login",!1):e&&i.includes(r)?(window.location.hash="#/home",!1):!0}async renderPage(){const e=ie.parseActiveUrlWithCombiner(),r=dt[e];if(this._checkAuth())try{this._content.innerHTML=await r.render(),await r.afterRender();const i=document.querySelector(".skip-link");i&&i.addEventListener("click",o=>{o.preventDefault();const c=document.querySelector("#mainContent");c.tabIndex=-1,c.focus()})}catch(i){console.error("Error rendering page:",i)}}}const mt="modulepreload",pt=function(t){return"/"+t},fe={},gt=function(e,r,i){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),m=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=pt(u),u in fe)return;fe[u]=!0;const g=u.endsWith(".css"),N=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${N}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":mt,g||(f.as="script"),f.crossOrigin="",f.href=u,m&&f.setAttribute("nonce",m),document.head.appendChild(f),g)return new Promise((G,M)=>{f.addEventListener("load",G),f.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(l){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=l,window.dispatchEvent(m),!m.defaultPrevented)throw l}return o.then(l=>{for(const m of l||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};async function ft(){try{if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();if(t)return await t.pushManager.getSubscription()?(console.log("✅ Sudah subscribe"),!0):(console.log("🔔 Belum subscribe"),!1)}return!1}catch(t){return console.error("Error saat memeriksa status subscription:",t),!1}}async function yt(){try{if("serviceWorker"in navigator){await navigator.serviceWorker.ready;const t=await ft(),e=localStorage.getItem("STORAGE_KEY"),r=localStorage.getItem("NOTIFICATION_ENABLED")==="true";if(e&&r&&Notification.permission==="granted"&&!t){const{subscribeToNotifications:i}=await gt(async()=>{const{subscribeToNotifications:o}=await Promise.resolve().then(()=>Be);return{subscribeToNotifications:o}},void 0);try{const o=await i();console.log("✅ Auto subscribe berhasil:",o)}catch(o){console.error("Gagal auto subscribe:",o)}}}}catch(t){console.error("Error saat inisialisasi notifikasi:",t)}}const be=new ht({content:document.querySelector("#content")});window.addEventListener("hashchange",()=>{be.renderPage()});window.addEventListener("load",async()=>{be.renderPage();try{await oe(),console.log("Service worker berhasil didaftarkan"),await yt()}catch(t){console.error("Gagal mendaftarkan service worker:",t)}});
