import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js';
import Results from './Results';
import Upload from './Upload';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import './views.css';

function Settings(){

  const { user, isAuthenticated } = useAuth0();

  var registeredUsers = [
    {username: "admin@tamu.edu", status: "admin"},
    {username: "jack@tamu.edu", status: "pending"}
  ];



  const renderRegisteredUsers = (registeredUsers, index) =>{
    return(
      <tr key = {index}>
        <td>{registeredUsers.username}</td>
        <td>{registeredUsers.status}</td>
        <td><button className = "edit" onClick={console.log({index})}>Edit</button></td>
      </tr>
    )
  }

  return(
    <>
    <div className = "center3">   <h1 className = "header">Settings</h1> </div>
    <div className = "chart5">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers.map(renderRegisteredUsers)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
    </>
  );

}


export default Settings;
