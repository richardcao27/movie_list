import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log('eTargetValue: ', e.target.value);
    console.log(
      'documentGetElemenybyID: ',
      document.getElementById('input').value
    );
    this.props.handleSearchInputChange(document.getElementById('input').value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          id="input"
          placeholder="Search movie.."
        />
        <button
          className="btn hidden-sm-down"
          onClick={this.handleInputChange}
          placeholder="Go!"
        >
          GO!
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// var Search = props => (
//   <div>
//     <input
//       onChange={() => {}}
//       type="text"
//       id="searchTerm"
//       placeholder="Search..."
//     />
//     <button
//       onClick={() => {
//         // reduce list to search term
//       }}
//     >
//       GO!
//     </button>
//   </div>
// );

export default Search;
