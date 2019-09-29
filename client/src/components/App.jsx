import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: this.props.data
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              {/* <Search callback={this.onSuccessfulSearch} onInputChange={this.onInputChange}/> */}
              <Search onInputChange={this.onInputChange} />
            </div>
          </div>
        </nav>
        <table className="table">
          <MovieList movies={this.state.currentList} />
        </table>
      </div>
    );
  }
}

export default App;
