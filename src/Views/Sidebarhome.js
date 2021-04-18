import React, {useState, component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js';
import HomePage from './HomePage';
import Results from './Results';
import Upload from './Upload';
import LogoutButton from '../components/LogoutButton';

function Sidebarhome() {

  return(
    <div className="App">
      <div className = "welcome">
      <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/Results' component={Results} />
            <Route path='/Upload' component={Upload} />
            <Route path='/Logout'>
              <LogoutButton />
            </Route>
          </Switch>
      </Router>
      </div>
    </div>
  );
};

export default Sidebarhome;
