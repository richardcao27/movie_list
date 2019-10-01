import React from 'react';

class AddMovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleAddMovie(e) {
    e.preventDefault();
    console.log('adding movie (etargetvalue) ', this.state.value);
    this.props.handleMovieSubmit(this.state.value);
  }

  changeHandler(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleAddMovie}>
        <input
          type="text"
          placeholder="Add Movie"
          name="movieItem"
          onChange={this.changeHandler}
        />
        <input type="submit" />
        {/* <button>Add Movie</button> */}
      </form>
    );
  }
}

export default AddMovieItem;
