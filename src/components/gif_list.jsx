import React, { Component } from 'react';

import Gif from './gif.jsx';


export default class GifList extends Component {
  constructor(props){
    super(props);
  }

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} select={this.props.select}/>)
  }

  render(){
    return(
    <div className="gif-list">
      {this.renderList()}
    </div>
    )
  }
}
