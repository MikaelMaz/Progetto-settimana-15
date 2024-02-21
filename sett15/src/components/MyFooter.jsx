import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function MyFooter() {
  return (
    <footer className="footer mt-4 py-3 bg-light">
      <Container>
        <Row>
          <Col>
            <p>Informazioni di contatto</p>
            <ul>
              <li>Email: example@example.com</li>
              <li>Telefono: 123-456-7890</li>
            </ul>
          </Col>
          <Col>
            <p>Link Utili</p>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/users">Utenti</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Best Posts</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
