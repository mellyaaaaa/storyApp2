const createHomeTemplate = () => `
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
`;

export default createHomeTemplate;