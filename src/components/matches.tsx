import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Person } from '../services/data';
import Match from './match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface MatchesProps {
  menteeData: Person[]
}
 
export interface MatchesState {
  
}
 
class Matches extends React.Component<MatchesProps, MatchesState> {
  state = {

  }
  render() { 
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mentee</th>
            <th>Mentor</th>
          </tr>
        </thead>
        <tbody>
          {this.props.menteeData.map(d => (
            <tr key={d.name}>
              <td colSpan={2}>
                {d.name} <Match menteeData={d}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
 
export default Matches;