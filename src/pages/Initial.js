import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import MovieContainer from '../components/MovieContainer';
import Spinner from '../components/Spinner';

export class Initial extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <Search />
        {loading ? <Spinner /> : <MovieContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Initial);