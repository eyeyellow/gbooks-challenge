import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import SearchArea from './search_area.js'
import ResultsArea from './results_area.js'

import { searchForBooks, render, showError } from '../main.js';
import { resizeContainer, uniqBooksById } from '../util.js'

// import exampleResults from '../example_results.js';


window.React = React;
window.ReactDOM = ReactDOM;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.renderResults = this.props.renderResults.bind(this);
  }

  componentDidMount() {
    this.setState({ books: exampleResults.items }, () => {
      this.renderResults()
      resizeContainer(this.state.books.length);
    })
  }

  handleQuerySubmit = (query) => {
    searchForBooks(query).then(({ items }) => {
      const books = uniqBooksById(this.state.books, items)
      this.setState({ books }, () => {
        this.renderResults()
        resizeContainer(this.state.books.length);
      })
    }).catch(error => showError(error.message));
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
