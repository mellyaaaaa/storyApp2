const createDetailTemplate = (story) => `
  <div class="detail-container">
    <div class="detail-header">
      <h2>${story.name}</h2>
      <p class="detail-date">${story.formattedDate}</p>
    </div>
    <div class="detail-content">
      <div class="detail-image">
        <img 
          src="${story.photoUrl}" 
          alt="Photo by ${story.name}" 
          crossorigin="anonymous"
        />
      </div>
      <div class="detail-description">
        <p>${story.description}</p>
      </div>
      ${story.hasLocation ? `
        <div class="detail-location">
          <h3>Location</h3>
          <story-map id="detailMap"></story-map>
        </div>
      ` : ''}
    </div>
    <div class="detail-actions">
      <a href="#/home" class="back-button" aria-label="Back to stories list">Back to List</a>
    </div>
  </div>
`;

export default createDetailTemplate;