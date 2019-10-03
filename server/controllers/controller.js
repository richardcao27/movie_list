const db = require('../../database/dbMethods.js');

module.exports = {
  getAllMovies: (req, res) => {
    console.log('controller getting movies');
    db.getMovieFromDB(req, res);
  },
  postMovie: (req, res) => {
    console.log('controller posting movie to db');

    db.postMovieToDB(req, res);
  },
  deleteMovie: (req, res) => {
    console.log('removing movie from db');
    db.removeMovieFromDB(req, res);
  }
};
