import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";


function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
     
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
         
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
