// import express framework
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller.js');

// Set PORT# to listen on
const PORT = 3000;

// create server
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.get('/movies', controller.getAllMovies);
app.post('/movies', controller.postMovie);
app.delete('/movies', controller.deleteMovie);
// app.get('/movies', (req, res) => {
//   res.send('woooo');
// });

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));
