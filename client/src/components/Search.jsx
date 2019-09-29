import React from 'react';

var Search = props => (
  <div>
    <input
      onChange={() => {}}
      type="text"
      id="searchTerm"
      placeholder="Search..."
    />
    <button
      onClick={() => {
        // getResults(props, document.getElementById('searchTerm').value);
      }}
    >
      GO!
    </button>
  </div>
);

export default Search;
