import ReactDOM from 'react-dom';
import { Component } from 'react';
import React from 'react';

import SearchArea from './search_area.js'
import ResultsArea from './results_area.js'


window.React = React;
window.ReactDOM = ReactDOM;

class App extends Component {
  render() {
    return(
      <div>
        <SearchArea />
        <ResultsArea />
      </div>  
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;