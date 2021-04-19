import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Views/views.css';
import './buttons.css';


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (

    <>
      <div className = "center4">
      <h1 className = "header">Maroon & White Matching</h1>
          <button className = "loginlogout" onClick={() => loginWithRedirect()}>
            Log In
          </button>
      </div>
    </>
  )
}

export default LoginButton
