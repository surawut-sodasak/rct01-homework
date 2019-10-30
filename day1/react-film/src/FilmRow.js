import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                <FilmPoster poster_path={this.props.poster_path} />

                <div className="film-summary">
                    <h1>{this.props.title}</h1>
                    <p>{new Date(this.props.year).getFullYear()}</p>
                </div>
            </div>
        );
    }
}

export default FilmRow;