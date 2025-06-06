class User {
    constructor({
      userId,
      name,
      token,
    }) {
      this.userId = userId;
      this.name = name;
      this.token = token;
    }
  
    static fromLoginResponse(loginResponse) {
      return new User({
        userId: loginResponse.userId,
        name: loginResponse.name,
        token: loginResponse.token,
      });
    }
  
    saveToStorage() {
      localStorage.setItem('STORY_APP', JSON.stringify({
        userId: this.userId,
        name: this.name,
        token: this.token,
      }));
    }
  
    static isLoggedIn() {
      return localStorage.getItem('STORY_APP') !== null;
    }
  
    static getLoggedInUser() {
      const userData = JSON.parse(localStorage.getItem('STORY_APP'));
      if (!userData) return null;
      
      return new User({
        userId: userData.userId,
        name: userData.name,
        token: userData.token,
      });
    }
  }
  
  export default User;