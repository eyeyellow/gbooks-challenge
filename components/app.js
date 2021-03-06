import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import SearchArea from './search_area.js'
import ResultsArea from './results_area.js'

import { searchForBooks, render, showError } from '../main.js';
import { resizeContainer, uniqBooksById, removePrevError } from '../util.js'

window.React = React;
window.ReactDOM = ReactDOM;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.renderResults = this.props.renderResults.bind(this);
  }

  handleQuerySubmit = (query) => {
    searchForBooks(query).then(({ items }) => {
      const books = uniqBooksById(this.state.books, items);
      this.setState({ books }, () => {
        removePrevError();
        this.renderResults();
        resizeContainer(books.length);
      })
    }).catch(error => {
      removePrevError();
      showError(error.message);
    });
  }

  render() {
    return(
      <div className="app">
        <div className="container">
          <div id="app-title">
            <h1>Search for a book</h1>
          </div>
          <SearchArea onQuerySubmit={this.handleQuerySubmit} />
          <ResultsArea />
        </div>
      </div>  
    )
  }
};

ReactDOM.render(<App renderResults={render} />, document.getElementById('app'));

export default App;
