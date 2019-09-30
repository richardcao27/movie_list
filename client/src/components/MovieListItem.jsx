import React from 'react';

const MovieListItem = props => {
  return <td className="table">{props.movie.title}</td>;
};
export default MovieListItem;
