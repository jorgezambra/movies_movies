import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MovieCard extends React.Component {
  render() {

    const { movie, onClick } = this.props;

    return (
      <Container>
        <Row>
          <Card style={{ width: '30%' }}>
            <Card.Body>
              <Col>
                <Card.Img variant="top" src={movie.ImagePath} />
              </Col>
              <br></br>
              <Card.Title>{movie.Title}</Card.Title>
              <Col>
                <Card.Text>{movie.Description}</Card.Text>
              </Col>
              <br></br>
              <Button onClick={() => onClick(movie)} variant="danger">MORE</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};