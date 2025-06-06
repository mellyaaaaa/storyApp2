import CameraHelper from '../utils/camera-helper';
import MapHelper from '../utils/map-helper';

class StoryForm extends HTMLElement {
  constructor() {
    super();
    this._lat = null;
    this._lon = null;
    this._photoBlob = null;
  }
  
  connectedCallback() {
    this._render();
    this._initForm();
  }
  
  disconnectedCallback() {
    CameraHelper.stop();
  }
  
  set submitHandler(handler) {
    this._submitHandler = handler;
  }
  
  async _initForm() {
    const cameraButton = this.querySelector('#cameraButton');
    const captureButton = this.querySelector('#captureButton');
    const videoElement = this.querySelector('#cameraView');
    const photoPreview = this.querySelector('#photoPreview');
    
    cameraButton.addEventListener('click', async () => {
      const cameraStarted = await CameraHelper.init(videoElement);
      
      if (cameraStarted) {
        videoElement.classList.remove('hidden');
        photoPreview.classList.add('hidden');
        captureButton.classList.remove('hidden');
        cameraButton.textContent = 'Change Photo';
      }
    });
    
    captureButton.addEventListener('click', async () => {
      this._photoBlob = await CameraHelper.takePhoto();
      
      const imageUrl = URL.createObjectURL(this._photoBlob);
      photoPreview.src = imageUrl;
      photoPreview.classList.remove('hidden');
      videoElement.classList.add('hidden');
      
      CameraHelper.stop();
    });
    
    const mapElement = this.querySelector('#locationMap');
    await MapHelper.init(mapElement, (lat, lon) => {
      this._lat = lat;
      this._lon = lon;
      
      this.querySelector('#latitude').value = lat;
      this.querySelector('#longitude').value = lon;
    });
    
    const locationButton = this.querySelector('#locationButton');
    locationButton.addEventListener('click', async () => {
      try {
        const { lat, lon } = await MapHelper.getUserLocation();
        this._lat = lat;
        this._lon = lon;
        
        this.querySelector('#latitude').value = lat;
        this.querySelector('#longitude').value = lon;
      } catch (error) {
        console.error('Error getting location:', error);
        alert('Could not get your location. Please select on the map.');
      }
    });
    
    const form = this.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const description = this.querySelector('#description').value;
      
      if (!description) {
        alert('Please enter a description');
        return;
      }
      
      if (!this._photoBlob) {
        alert('Please take a photo');
        return;
      }
      
      if (this._submitHandler) {
        this._submitHandler({
          description,
          photo: this._photoBlob,
          lat: this._lat,
          lon: this._lon,
        });
      }
    });
  }
  
  _render() {
    this.innerHTML = `
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
    `;
  }
}

customElements.define('story-form', StoryForm);