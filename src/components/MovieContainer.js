import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

export class MovieContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <Card key={index} movie={movie} />            
          ))
        : null;
    return <div className="cards">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MovieContainer);