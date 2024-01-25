// Import React and CSS
import React from 'react';
import './SignupScreen.css';

function SignupScreen() {
  const register = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  const signIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupScreen_gray'>New to Netflix?</span> 
          <span className="signupScreen_link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
