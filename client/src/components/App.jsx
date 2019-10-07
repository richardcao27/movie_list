import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovieItem from './AddMovieItem.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: [],
      totalList: []
    };
    // this.props.originalList = this.props.data;
    this.searchList = this.searchList.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleUnwatchedList = this.handleUnwatchedList.bind(this);
    this.handleWatchedList = this.handleWatchedList;
  }

  searchList(searchTerm) {
    //filter the currentlist

    if (searchTerm === '') {
      this.retrieveData();
    } else {
      let list = this.state.currentList.slice();

      let updatedList = list.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Search Term: ', searchTerm);

      this.setState({
        currentList: updatedList,
        value: ''
      });

      console.log(this.state.currentList);
    }
  }

  addMovie(searchTerm) {
    console.log('searchTerm: ', searchTerm);
    // let newArr = [...this.state.currentList];
    // let newMovie = {
    //   title: searchTerm
    // };
    // newArr.push(newMovie);
    // this.setState({
    //   currentList: newArr
    // });
    axios
      .post('/movies', {
        title: searchTerm
      })
      .then(res => {
        console.log(`Adding ${res.data} database!`);
      })
      .catch(err => {
        console.log('Could not add to database!');
      });
    console.log('currentList: ', this.state.currentList);
    this.retrieveData();
  }

  //movie title string
  deleteMovie(movie) {
    console.log('Clicked on: ', movie);
    axios
      .post('/movies', {
        title: movie
      })
      .then(res => {
        console.log('deleted movie from db!');
      })
      .catch(err => {
        if (err) {
          console.log('Could not delete movie!');
        }
      });
    this.retrieveData();
  }

  handleWatchedList() {
    
  }

  handleUnwatchedList() {}

  retrieveData() {
    axios
      .get('/movies')
      .then(res => {
        console.log('successful GET!');
        this.setState({
          currentList: res.data
        });
        console.log(`Client received ${res.data} from server`);
      })
      .catch(err => {
        console.log('could not query from database');
      });
  }

  componentDidMount() {
    this.retrieveData();
  }

  render() {
    return (
      <div>
        <AddMovieItem handleMovieSubmit={this.addMovie} />
        <nav className="navbar">
          <div>
            <Search handleSearchInputChange={this.searchList} />
          </div>
        </nav>

        <table className="movie-list">
          <caption id="header">Current List</caption>
          <button>Watched</button>
          <button>Unwatched</button>
          <MovieList
            movies={this.state.currentList}
            handleDeleteMovie={this.deleteMovie}
          />
        </table>
      </div>
    );
  }
}

export default App;
