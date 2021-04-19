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
    {mentee: "Justin Hardy", mentor: "Luke Ryan"},
    {mentee: "Tim Rhodes", mentor: "Pedro Suarez"},
    {mentee: "Mario Ballard", mentor: "Luke Ryan"},
    {mentee: "Stuart Page", mentor: "Luke Ryan"},
    {mentee: "Marco Bishop", mentor: "Pedro Suarez"},
    {mentee: "Derek Chapman", mentor: "Gustavo Hart"},
    {mentee: "Casey Olsono", mentor: "Luke Ryan"},
    {mentee: "Cedric Wolfe", mentor: "Gustavo Hart"},
    {mentee: "Eileen Gordon", mentor: "Luke Ryan"},
    {mentee: "Gregory Baldwin", mentor: "Hattie Maldonado"},
    {mentee: "Ethel Morrison", mentor: "Luke Ryan"},
    {mentee: "Troy Matthews", mentor: "Hattie Maldonado"},
    {mentee: "Wilma Wallace", mentor: "Luke Ryan"},
    {mentee: "Karen Powell", mentor: "Luke Ryan"},
    {mentee: "Inez Vargas", mentor: "Hattie Maldonado"},
    {mentee: "Clifton Jackson", mentor: "Luke Ryan"},
    {mentee: "Jana Pierce", mentor: "Luke Ryan"},
    {mentee: "Ervin Poole", mentor: "Luke Ryan"},
    {mentee: "Warren Osborne", mentor: "Rafael Perez"},
    {mentee: "Leigh Mooreo", mentor: "Rafael Perez"},
    {mentee: "Shane Cole", mentor: "Mike Tyson"}
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
    <div className = "center3">   <h1 className = "header">Results</h1> </div>
      <div className = "chart1">
      <BarChart />
      </div>
      <div className = "chart2">
      <PieChart />
      </div>
      <div className = "chart3">
      <BarChart2 />
      </div>

      <div className = "chart4"><p className = "parragraph2"> Number of unique words: 25</p></div>
      <div className = "chart5">
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
