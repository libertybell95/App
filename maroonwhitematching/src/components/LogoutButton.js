import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './buttons.css';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className = "center">
        <button className = "loginlogout" onClick={() => logout()}>
          Confirm Logout
        </button>
      </div>
    )
  )
}

export default LogoutButton
