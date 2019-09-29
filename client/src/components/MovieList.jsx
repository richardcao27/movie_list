import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = props => {
  return (
    <tbody>
      {props.movies.map(movie => (
        <tr>
          <MovieListItem movie={movie} key={movie} />
        </tr>
      ))}
    </tbody>
  );
};

export default MovieList;
