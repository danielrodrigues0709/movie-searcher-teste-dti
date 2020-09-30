import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    searchMovie,
    fetchMovies,
    setLoading
} from '../actions/searchActions';

export class Search extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div className="search-container">
                <h2 className="display-12">Encontre seu filme favorito ...</h2>
                <form id="searchForm" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="Digite o nome do filme ..."
                        onChange={this.onChange}
                    />
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies, setLoading }
)(Search);