import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mystyle = {
  marginBottom: "20px",
  textAlign: "center",
  border: "5px solid red"
};

function Text(props) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={7}>
        <h1 style={mystyle}>{props.result}</h1>
        </Col>
      </Row>
    </Container>


    //  <input style={mystyle}>{props.value}</input>
  );
}

export default Text;
