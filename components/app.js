import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import SearchArea from './search_area.js'
import ResultsArea from './results_area.js'

import { searchForBooks, render, showError } from '../main.js';


window.React = React;
window.ReactDOM = ReactDOM;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.renderResults = this.props.renderResults.bind(this);
  }

  handleQuerySubmit = (query) => {
    searchForBooks(query).then(data => {
      this.setState({ books: data.items }, () => this.renderResults())
    }).catch(error => showError(error.message));
  }

  render() {
    return(
      <div className="app">
        <div className="container">
          <div id="app-title" className="item">
            <h2>Search for a book</h2>
          </div>
          <SearchArea onQuerySubmit={this.handleQuerySubmit} />
          <ResultsArea results={this.state.books}/>
        </div>
      </div>  
    )
  }
};

ReactDOM.render(<App renderResults={render} />, document.getElementById('app'));

export default App;
