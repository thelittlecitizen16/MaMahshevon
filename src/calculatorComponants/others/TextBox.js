import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mystyle = {
  textAlign: "center",
};

const divStyle={
  height: "70px",
  border: "5px solid lightseagreen",
  marginBottom: "10px"

};

function Text(props) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={7}  style={divStyle}>
        <h1 style={mystyle}>{props.result}</h1>
        </Col>
      </Row>
    </Container>


    //  <input style={mystyle}>{props.value}</input>
  );
}

export default Text;
