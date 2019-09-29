import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './exampleMovieData.js';

ReactDOM.render(<App data={movies} />, document.getElementById('app'));
