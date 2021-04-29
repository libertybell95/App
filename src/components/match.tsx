import React, { useState } from 'react';
import { Collapse, Row, Col, Container } from 'react-bootstrap';
import { Person } from '../services/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface MatchProps {
  menteeData: Person
}
 
const Match: React.FunctionComponent<MatchProps> = (props: MatchProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <FontAwesomeIcon icon={["fas", "info-circle"]} style={{cursor: "pointer"}} onClick={() => setOpen(!open)}/>
      <Collapse in={open}>
        <Container>
          <Row noGutters={true}>
            <Col>
              Openness to Expirence: <FontAwesomeIcon icon={["fas", props.menteeData.personality.OTE ? "check" : "times"]} color={props.menteeData.personality.OTE ? "green" : "red"}/>
            </Col>
            <Col>
              Conscientiousness: <FontAwesomeIcon icon={["fas", props.menteeData.personality.CON ? "check" : "times"]} color={props.menteeData.personality.CON ? "green" : "red"}/>
            </Col>
            <Col>
              Extraversion: <FontAwesomeIcon icon={["fas", props.menteeData.personality.EXT ? "check" : "times"]} color={props.menteeData.personality.EXT ? "green" : "red"}/>
            </Col>
            <Col>
              Agreeableness: <FontAwesomeIcon icon={["fas", props.menteeData.personality.AGR ? "check" : "times"]} color={props.menteeData.personality.AGR ? "green" : "red"}/>
            </Col>
            <Col>
              Neuroticism: <FontAwesomeIcon icon={["fas", props.menteeData.personality.NEU ? "check" : "times"]} color={props.menteeData.personality.NEU ? "green" : "red"}/>
            </Col>
          </Row>
          <Row>
            <Col>Class: {props.menteeData.class}</Col>
            <Col>Major: {props.menteeData.major}</Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
}
 
export default Match;