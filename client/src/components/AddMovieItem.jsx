import React from 'react';

class AddMovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleAddMovie(e) {
    e.preventDefault();
    console.log('adding movie (etargetquery) ', this.state.query);
    this.props.handleMovieSubmit(this.state.query);
  }

  changeHandler(e) {
    console.log(e.target.type);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleAddMovie}>
        <input
          type="text"
          placeholder="Add Movie"
          name="query"
          onChange={this.changeHandler}
        />
        <input type="submit" />
        {/* <button>Add Movie</button> */}
      </form>
    );
  }
}

export default AddMovieItem;
