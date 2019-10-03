import React from 'react';

const MovieListItem = props => {
  return (
    <td className="table" id="row" key={props.movie.id}>
      {props.movie.title}
      <button
        onClick={() => {
          props.item(props.movie.title);
        }}
      >
        Delete
      </button>
    </td>
  );
};
export default MovieListItem;
