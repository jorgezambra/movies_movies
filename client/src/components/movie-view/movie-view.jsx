import React from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export class MovieView extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <Container>
        <br></br>
        <div className="movie-view" style={{ width: "660px" }}>
          <img className="movie-poster" src={movie.ImagePath} />
          <div className="movie-title">
            <br></br>
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
          <br></br>
          <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <br></br>
          <div className="movie-genre">
            <span className="label">Genre: </span>
            <span className="value">{movie.Genre.Name}</span>
          </div>
          <br></br>
          <div className="movie-director">
            <span className="label">Director: </span>
            <span className="value">{movie.Director.Name}</span>
          </div>
          <br></br>
          <Link to={`/`}>
            <Button variant="dark" onClick={backToMovies}>BACK</Button>
          </Link>
        </div>
      </Container>
    );
  }
}