import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./contact.css";
import {Col, Row} from "react-bootstrap";
import ContactInfo from "./ContactInfo";
export default function ContactForm() {

    return (
        <Container className="form" >
        <Row className="parent">

            <Col md={9}>
                <div className="inner-text">
            <Form >
                <label className="form-title">Have any Questions?</label>
                <Form.Group class="floating-label-group">
                    <input type="text" id="name" autocomplete="on" required />
                    <label for="name">Full Name</label>
                </Form.Group>
                <Row>
                    <Col>
                    <Form.Group class="floating-label-group">
                    <input type="email" id="email" autocomplete="on" required />
                    <label for="email">Email</label>
                    </Form.Group>
                    </Col>
                    <Col >
                    <Form.Group class="floating-label-group">
                    <input type="number" id="name" autocomplete="on" required />
                    <label for="phone">Phone</label>
                    </Form.Group>
                    </Col>
                </Row>
                <Form.Group class="floating-label-group">
                    <textarea id="message" cols="40" rows="5" required></textarea>
                    <label for="message">Write your message here ... </label>
                </Form.Group>
                <Button type="submit" className="submit-button">Submit Message</Button>
            </Form>
            </div>
            </Col>
            <Col md={3} style={{"background":"#F26B37"}}>
            <ContactInfo/></Col>
            </Row>


        </Container>
    )
}
