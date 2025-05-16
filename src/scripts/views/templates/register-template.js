const createRegisterTemplate = () => `
  <div class="register-container">
    <h2>Register</h2>
    <form id="registerForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          aria-required="true"
          aria-label="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          aria-required="true"
          aria-label="Enter your email address"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required 
          aria-required="true"
          aria-label="Create a password (minimum 8 characters)"
          minlength="8"
        />
        <p class="helper-text">Password must be at least 8 characters</p>
      </div>
      <div class="form-group">
        <button 
          type="submit" 
          aria-label="Create your account"
        >
          Register
        </button>
      </div>
    </form>
    <p>Already have an account? <a href="#/login" aria-label="Go to login page">Login here</a></p>
  </div>
`;

export default createRegisterTemplate;