import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
// import '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: this.props.data
    };
  }

  searchList(searchTerm) {
    this.setState({
      currentList: searchTerm
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div>
            <div>
              <Search handleSearchInputChange={this.searchList.bind(this)} />
            </div>
          </div>
        </nav>
        <table className="movie-list">
          <MovieList movies={this.state.currentList} />
        </table>
      </div>
    );
  }
}

export default App;
