import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovieItem from './AddMovieItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: this.props.data
    };
    // this.props.originalList = this.props.data;
    this.searchList = this.searchList.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  searchList(searchTerm) {
    //filter the currentlist
    let list = this.props.data;

    let updatedList = list.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search Term: ', searchTerm);

    this.setState({
      currentList: updatedList
    });
    console.log(this.state.currentList);
  }

  showWatchedMovies() {}

  showUnwatchedMovies() {}

  addMovie(searchTerm) {
    console.log('searchTerm: ', searchTerm);
    let newArr = [...this.state.currentList];
    let newMovie = {
      title: searchTerm
    };
    newArr.push(newMovie);
    this.setState({
      currentList: newArr
    });
    console.log('currentList: ', this.state.currentList);
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
        <h3>Current List</h3>
        <table className="movie-list">
          <MovieList movies={this.state.currentList} />
        </table>
      </div>
    );
  }
}

export default App;
