import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import SearchArea from './search_area.js'
import ResultsArea from './results_area.js'

import { searchForBooks, render } from '../main.js';


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
    });
  }

  render() {
    return(
      <div>
        <SearchArea onQuerySubmit={this.handleQuerySubmit} />
        <ResultsArea results={this.state.books}/>
      </div>  
    )
  }
};

ReactDOM.render(<App renderResults={render} />, document.getElementById('app'));

export default App;
