import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Logo = () => (
  <Row className="justify-content-md-center py-3">
    <Col md="auto">
      <Image fluid rounded mx="auto" d="block" src="/images/experience-islandsnow-bootstrap-logo.png" />
    </Col>
  </Row>
);

export default Logo;
