import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  render() {
    const gifs = [
      { id: "VIfE4DE7vY49i" },
      { id: "VKP6oCpyHqWWI" },
      { id: "xUPGGdROwKhwyitUYw"}
    ]
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="VIfE4DE7vY49i"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gif={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
