import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js';
import Results from './Results';
import Upload from './Upload';
import './views.css';

function HomePage(){

  return(
    <>
    <h1 className = "header">Home</h1>
    <p className = "parragraph">
      Welcome to the Maroon & White Leadership Program matching application!
      Go to the upload tab to upload data, or clear existing data.
      Go to the results tab to view the results if you have already uploaded data.
    </p>
    </>
  );

}


export default HomePage;
