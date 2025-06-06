class SkipContent extends HTMLElement {
    constructor() {
      super();
      this._render();
    }
  
    connectedCallback() {
      this._setupEventListeners();
    }
  
    _setupEventListeners() {
      const skipLink = this.querySelector('.skip-link');
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const content = document.querySelector('#mainContent');
        content.focus();
        content.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    _render() {
      this.innerHTML = `
        <a href="#mainContent" class="skip-link">Skip to content</a>
      `;
    }
  }
  
  customElements.define('skip-content', SkipContent);