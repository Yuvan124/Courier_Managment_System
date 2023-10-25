import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

function Newsletter({ status, message, onValidated }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      
    </Col>
  );
}

export default Newsletter;
