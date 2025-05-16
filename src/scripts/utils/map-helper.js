const MapHelper = {
    async init(mapElement, locationInputCallback) {
      this._map = L.map(mapElement);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this._map);
      
      this._map.setView([-2.5489, 118.0149], 5);
      
      this._marker = null;
      
      this._map.on('click', (event) => {
        const { lat, lng } = event.latlng;
        
        if (this._marker) {
          this._map.removeLayer(this._marker);
        }
        
        this._marker = L.marker([lat, lng]).addTo(this._map);
        
        if (locationInputCallback) {
          locationInputCallback(lat, lng);
        }
      });
    },
    
    setMarker(lat, lon) {
      if (!this._map) return;
      
      if (this._marker) {
        this._map.removeLayer(this._marker);
      }
      
      this._marker = L.marker([lat, lon]).addTo(this._map);
      this._map.setView([lat, lon], 15);
    },
    
    getUserLocation() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('Geolocation not supported by your browser'));
          return;
        }
        
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            this.setMarker(latitude, longitude);
            resolve({ lat: latitude, lon: longitude });
          },
          (error) => {
            reject(error);
          }
        );
      });
    },
  };
  
  export default MapHelper;