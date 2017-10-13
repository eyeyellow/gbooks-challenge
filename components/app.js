import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import SearchArea from './search_area.js'
import ResultsArea from './results_area.js'

import { fetchBooks } from '../network/fetch_books';


window.React = React;
window.ReactDOM = ReactDOM;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  handleQuerySubmit = (query) => {
    fetchBooks(query);
  }

  render() {
    return(
      <div>
        <SearchArea onQuerySubmit={this.handleQuerySubmit} />
        <ResultsArea />
      </div>  
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;