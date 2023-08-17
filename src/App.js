import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser    } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  }
  return (
    <div className={`loginContainer ${isSignUpMode ? 'sin-up mode' : ''}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form action='#' className='sign-in_form loginForm'>
            <h2 className='title'>Sign in</h2>

            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
              <input className='LoginInput' type='text' placeholder='Username' />

            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input className='LoginInput' type='text' placeholder='Email' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input className='LoginInput' type='text' placeholder='Password' />
            </div>
            <button className='btn'>Sign In</button>
            <p className='social-text loginp'>Sign in with social plateform</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
