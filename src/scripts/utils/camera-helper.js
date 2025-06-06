const CameraHelper = {
    async init(videoElement) {
      this._stream = null;
      this._videoElement = videoElement;
      
      try {
        this._stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
          },
        });
        
        this._videoElement.srcObject = this._stream;
        
        return true;
      } catch (error) {
        console.error('Error accessing camera:', error);
        return false;
      }
    },
    
    takePhoto() {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      canvas.width = this._videoElement.videoWidth;
      canvas.height = this._videoElement.videoHeight;
      
      context.drawImage(this._videoElement, 0, 0, canvas.width, canvas.height);
      
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg', 0.8);
      });
    },
    
    stop() {
      if (this._stream) {
        this._stream.getTracks().forEach((track) => {
          track.stop();
        });
        
        this._videoElement.srcObject = null;
        this._stream = null;
      }
    },
  };
  
  export default CameraHelper;