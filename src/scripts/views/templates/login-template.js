const createLoginTemplate = () => `
  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
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
          aria-label="Enter your password"
          minlength="8"
        />
      </div>
      <div class="form-group">
        <button 
          type="submit" 
          aria-label="Sign in to your account"
        >
          Login
        </button>
      </div>
    </form>
    <p>Don't have an account? <a href="#/register" aria-label="Go to registration page">Register here</a></p>
  </div>
`;

export default createLoginTemplate;