import React, { Component } from 'react';

import FilmRow from './FilmRow';

class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map( (film, index) => <FilmRow id={film.id} title={film.title} year={film.release_date} poster_path={film.poster_path} />);

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;