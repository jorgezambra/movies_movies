import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {

    const { movie } = this.props;

    return (
      <Container>
        <Row>
          <Card style={{ width: '20rem' }}>
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
              <Link to={`/movies/${movie._id}`}>
                <Button variant="danger">More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

/*MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
*/