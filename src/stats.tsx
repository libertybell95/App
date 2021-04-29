import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClassYear from './components/classYear'
import Personality from './components/personality'
import Matches from './components/matches'
import Data from './services/data'

export interface StatsProps {
  
}
 
export interface StatsState {
  
}
 
class Stats extends React.Component<StatsProps, StatsState> {
  state = {
    data: Data()
  }
  
  render() { 
    return (
      <>
        <Container>
          <Row>
            <Col>
              <ClassYear menteeData={this.state.data}/>
            </Col>
            <Col>
              <Personality menteeData={this.state.data}/>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
          <Matches menteeData={this.state.data}/>
        </Container>
      </>
    );
  }
}
 
export default Stats;