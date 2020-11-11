import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './registration-view.scss';


export function RegistrationView(props) {
  const [username, createUsername] = useState('');
  const [password, createPassword] = useState('');
  const [email, createEmail] = useState('');
  const [birthday, createBirthday] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);

  };


  return (
    <Container>
      <Form>
        <br></br>
        <h2>Register New User</h2>
        <br></br>
        <Form.Group className='register'>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => createUsername(e.target.value)}
              />
            </Col>
            <Col xs='auto'>
              <Form.Label className='Label'>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => createPassword(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => createEmail(e.target.value)}
              />
            </Col>
            <Col xs='auto'>
              <Form.Label className='Label'>Date of Birth</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter DOB (MM/DD/YYYY)"
                value={birthday}
                onChange={(e) => createBirthday(e.target.value)}
              />
            </Col>
          </Row>
          <Col>
            <br></br>
            <Button variant="dark" type="submit" onClick={handleRegister}>
              Register
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}