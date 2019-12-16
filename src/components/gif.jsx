import React, { Component } from 'react';

class Gif extends Component {

  handleClick = (event) => {
    this.props.select(event.target.id);
  }

  render(){
    return(
      <div className="selected-gif" >
        <img src={`https://media.giphy.com/media/${this.props.id}/200.gif`}
             alt=""
             className="gif"
             onClick={this.handleClick}
             id = {this.props.id} />
      </div>
    );
  }
}

export default Gif;
