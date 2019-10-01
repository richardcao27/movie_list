import React from 'react';

const MovieListItem = props => {
  return (
    <td className="table" id="row">
      {props.movie.title}
    </td>
  );
};
export default MovieListItem;
