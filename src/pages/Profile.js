import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from './Layout';

function ProfilePage() {
  return (
    <>
    <Layout/>
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Alaa Yasser</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">23 years old</Card.Subtitle>
              <Card.Text>A beautiful girl</Card.Text>
              <Card.Text>Email: alaayasser499@gmail.com</Card.Text>
              <Card.Text>History: lalalalalla</Card.Text>
              <Card.Text>
                Number of sessions finished: 5
                <br />
                Number of hours: 9
              </Card.Text>
              <Card.Text>Keep Going</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ProfilePage;
