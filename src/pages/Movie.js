import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../actions/searchActions';
import Spinner from '../components/Spinner';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
      <div className="movie-container">
        <div className="row">
          <div className="col-md-4 card-poster">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8 card-body">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Gênero:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Lançamento:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Diretor:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Roteiristas:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Atores:</strong> {movie.Actors}
              </li>
              <li className="list-group-item">
                <strong>Resumo:</strong> {movie.Plot}
              </li>
            </ul>
              <Link to="/" className="btn btn-default text-light">
                <strong>Voltar para busca</strong>
              </Link>
          </div>
        </div> 
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);