import React, {useState} from 'react';
import './views.css';
import BarChart from '../components/BarChart.js';
import PieChart from '../components/PieChart.js';
import BarChart2 from '../components/BarChart2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

function Results(){

  const matches = [
    {mentee: "Jack Wilson", mentor: "Tom Holland"},
    {mentee: "Daniel Guerson", mentor: "Rafael Perez"},
    {mentee: "Tom Jordan", mentor: "Pedro Suarez"},
    {mentee: "Cristiano Ronaldo", mentor: "Luke Ryan"},
    {mentee: "Tahir Galvez", mentor: "Mike Tyson"}
  ]

  const renderMatches = (matches, index) =>{
    return(
      <tr key = {index}>
        <td>{matches.mentee}</td>
        <td>{matches.mentor}</td>
      </tr>
    )
  }

  return(
    <>
    <h1 className = "header">Results</h1>
    <div className = "center">
    <BarChart />
    </div>
    <div className = "center">
    <PieChart />
    </div>
    <div className = "center">
    <BarChart2 />
    </div>

    <p className = "parragraph">Number of unique words: 25</p>
    <p> </p>
    <div className = "center">
    <ReactBootStrap.Table striped bordered hover>
    <thead>
      <tr>
        <th>Mentee</th>
        <th>Mentor</th>
      </tr>
    </thead>
    <tbody>
      {matches.map(renderMatches)}
    </tbody>
    </ReactBootStrap.Table>
    </div>
    </>
  );

}


export default Results;
