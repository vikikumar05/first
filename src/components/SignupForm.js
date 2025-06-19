import React from 'react';
import './SignupForm.css';

const SignupForm = () => (
  <div className="signup-form">
    <h2>Signup</h2>
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default SignupForm;
