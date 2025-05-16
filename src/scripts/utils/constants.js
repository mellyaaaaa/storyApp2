const ApiEndpoint = {
    REGISTER: '/register',
    LOGIN: '/login',
    GET_ALL_STORIES: '/stories',
    ADD_STORY: '/stories',
    DETAIL_STORY: (id) => `/stories/${id}`,
  };
  
  export { ApiEndpoint };