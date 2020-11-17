import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);

    axios.post('https://mahmovies.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch(e => {
        console.log('error registering the user')
      });
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
                placeholder="(MM/DD/YYYY)"
                value={birthday}
                onChange={(e) => createBirthday(e.target.value)}
              />
            </Col>
          </Row>
          <Col>
            <br></br>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}