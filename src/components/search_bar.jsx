import React, { Component } from 'react';

class SearchBar extends Component {

  handleClick = (event) => {
    this.props.search(event.target.value)
  }

  render(){
    return(
      <input className="form-search" onChange={this.handleClick}>
      </input>
    );
  }
}

export default SearchBar;
