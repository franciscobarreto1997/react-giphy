import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }

  }

  search = (query) => {
    giphy('p5EP6Gilf7EnugdA3JKkN0FV4jMA4TbQ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }



  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
