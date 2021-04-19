import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const User = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
     <div>
        <JSONPretty data={user} />
    </div>
    )
  )
}

export default User
