class StoryMap extends HTMLElement {
    constructor() {
      super();
      this._map = null;
      this._markers = [];
    }
  
    set stories(stories) {
      this._stories = stories.filter(story => story.hasLocation);
      this._initMap();
    }
  
    set story(story) {
      this._stories = story.hasLocation ? [story] : [];
      this._initMap();
    }
  
    connectedCallback() {
      this._render();
    }
  
    _render() {
      this.innerHTML = `
        <div id="map" class="map-container"></div>
      `;
    }
  
    async _initMap() {
      if (!this._stories || this._stories.length === 0) return;
  
      await new Promise(resolve => setTimeout(resolve, 100));
  
      if (!this._map) {
        this._map = L.map('map');
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this._map);
      }
  
      this._markers.forEach(marker => this._map.removeLayer(marker));
      this._markers = [];
  
      const bounds = L.latLngBounds();
      
      this._stories.forEach(story => {
        if (story.hasLocation) {
          const marker = L.marker([story.lat, story.lon])
            .addTo(this._map)
            .bindPopup(`
              <div class="map-popup">
                <h4>${story.name}</h4>
                <p>${this._shortenText(story.description, 50)}</p>
                <a href="#/detail/${story.id}" aria-label="View full story by ${story.name}">View details</a>
              </div>
            `);
          
          this._markers.push(marker);
          bounds.extend([story.lat, story.lon]);
        }
      });
  
      if (this._markers.length > 0) {
        this._map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  
    _shortenText(text, maxLength) {
      if (text.length <= maxLength) return text;
      return text.substr(0, maxLength) + '...';
    }
  }
  
  customElements.define('story-map', StoryMap);