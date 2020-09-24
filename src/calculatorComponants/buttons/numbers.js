import React, { useState } from 'react';
import CreateButton from './button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function CreateNumbersButton(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>                 
                    <Row >
                        <Col><CreateButton value="1" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="2" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="3" setResult ={props.setResult}/></Col>
                    </Row>
                    <Row>
                        <Col><CreateButton value="4" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="5" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="6" setResult ={props.setResult}/></Col>
                    </Row>
                    <Row>
                        <Col><CreateButton value="7" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="8" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="9" setResult ={props.setResult}/></Col>
                    </Row>
                    <Row>
                        <Col><CreateButton value="=" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="0" setResult ={props.setResult}/></Col>
                        <Col><CreateButton value="clear" setResult ={props.setResult}/></Col>
                    </Row>
                </Col>
                <Col md={2}>
                    <Row >
                        <Col><CreateButton value="*" setResult ={props.setResult}/></Col>
                    </Row>
                    <Row>
                        <Col><CreateButton value="-" setResult ={props.setResult}/></Col>
                    </Row>
                    <Row>
                        <Col><CreateButton value="+" setResult ={props.setResult}/></Col>
                    </Row>
                    <Row>
                        <Col><CreateButton value=":" setResult ={props.setResult}/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default CreateNumbersButton;
