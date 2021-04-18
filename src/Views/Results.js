import React, {useState} from 'react';
import './views.css';

function Results(){

  return(
    <>
    <h1 className = "header">Results</h1>
    <div className = "center">
    <table>
      <thead>
        <tr>
        <th>Mentee</th>
        <th>Mentor</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    </div>
    </>
  );

}


export default Results;
