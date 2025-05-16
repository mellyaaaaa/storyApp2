class Story {
    constructor({
      id,
      name,
      description,
      photoUrl,
      createdAt,
      lat,
      lon,
    }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.photoUrl = photoUrl;
      this.createdAt = new Date(createdAt);
      this.lat = lat;
      this.lon = lon;
    }
  
    static fromApiResponse(apiResponse) {
      return new Story({
        id: apiResponse.id,
        name: apiResponse.name,
        description: apiResponse.description,
        photoUrl: apiResponse.photoUrl,
        createdAt: apiResponse.createdAt,
        lat: apiResponse.lat,
        lon: apiResponse.lon,
      });
    }
  
    static fromApiResponseList(apiResponseList) {
      return apiResponseList.map((item) => this.fromApiResponse(item));
    }
  
    get hasLocation() {
      return this.lat !== null && this.lon !== null;
    }
  
    get formattedDate() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      
      try {
        return this.createdAt.toLocaleDateString('id-ID', options);
      } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date';
      }
    }
  }
  
  export default Story;