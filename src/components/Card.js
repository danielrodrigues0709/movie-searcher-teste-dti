import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Card extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="card-container">
        <div className="movie-card">
          <img className="poster" src={movie.Poster} alt="poster" />
          <h5 className="card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
            Mais detalhes
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;