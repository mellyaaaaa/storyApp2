class StoryItem extends HTMLElement {
    constructor() {
      super();
      this._story = null;
      this._mapElement = null;
    }
  
    set story(story) {
      this._story = story;
      this.render();
      if (this._story.hasLocation) {
        this._initMap();
      }
    }
  
    async _initMap() {
      await new Promise(resolve => setTimeout(resolve, 100));
  
      const mapContainerId = `map-${this._story.id.replace(/[^a-zA-Z0-9]/g, '')}`;
      const mapContainer = this.querySelector(`#${mapContainerId}`);
      
      if (!mapContainer) return;
  
      const map = L.map(mapContainerId, {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false
      }).setView([this._story.lat, this._story.lon], 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker([this._story.lat, this._story.lon])
        .addTo(map)
        .bindPopup(`
          <div class="map-popup">
            <h4>${this._story.name}</h4>
            <p>${this._shortenText(this._story.description, 50)}</p>
          </div>
        `);
    }
  
    render() {
      // Pastikan ID story tetap sama persis tanpa perubahan case
      const storyId = encodeURIComponent(this._story.id);
      const mapId = `map-${this._story.id.replace(/[^a-zA-Z0-9]/g, '')}`;
      
      this.innerHTML = `
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
              <a href="#/detail/${storyId}" aria-label="View story by ${this._story.name}">${this._story.name}</a>
            </h3>
            <p class="story-item__date">${this._story.formattedDate}</p>
            <p class="story-item__description">${this._shortenText(this._story.description, 100)}</p>
            ${this._story.hasLocation ? `
              <div class="story-item__map-container">
                <div id="${mapId}" class="story-item__map"></div>
              </div>
            ` : ''}
          </div>
        </article>
      `;
    }
  
    _shortenText(text, maxLength) {
      if (text.length <= maxLength) return text;
      return text.substr(0, maxLength) + '...';
    }
  }
  
  customElements.define('story-item', StoryItem);