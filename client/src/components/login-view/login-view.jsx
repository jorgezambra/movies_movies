/*
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './login-view.scss';


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server for authentication
    axios.post('https://mahmovies.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
      });
  };
  return (
    <Container>
      <Form>
        <br></br>
        <h2>Registered Users</h2>
        <br></br>
        <Form.Group className='login'>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='Control'
                type='text'
                placeholder='Enter Username'
              />
            </Col>
          </Row>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='Control2'
                type='password'
                placeholder='Enter Password'
              />
            </Col>
          </Row>
          <Col className='Button'>
            <br></br>
            <Button type='button' variant='dark' onClick={handleSubmit}>
              Login
              </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

*/

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './login-view.scss';


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    props.onLoggedIn(username);
  };

  return (
    <Container>
      <Form>
        <br></br>
        <h2>Registered Users</h2>
        <br></br>
        <Form.Group className='login'>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='Control'
                type='text'
                placeholder='Enter Username'
              />
            </Col>
          </Row>
          <Row>
            <Col xs='auto'>
              <Form.Label className='Label'>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='Control2'
                type='password'
                placeholder='Enter Password'
              />
            </Col>
          </Row>
          <Col className='Button'>
            <br></br>
            <Button type='button' variant='dark' onClick={handleSubmit}>
              Login
              </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}