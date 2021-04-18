import React, {useState, component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';
import Sidebarhome from './Views/Sidebarhome';
import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if(isAuthenticated){
    return <Sidebarhome />;
  }else{
    return <LoginButton />;
  }

};

export default App;
