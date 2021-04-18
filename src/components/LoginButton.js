import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './buttons.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (

    <>
      <h1 className = "header">Maroon & White Matching</h1>
      <div className = "center">
          <button className = "loginlogout" onClick={() => loginWithRedirect()}>
            Log In
          </button>
      </div>
    </>
  )
}

export default LoginButton
