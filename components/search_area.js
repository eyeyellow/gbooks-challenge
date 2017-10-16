import { Component } from 'react';
import PropTypes from 'prop-types';

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  static propTypes = {
    onQuerySubmit: PropTypes.func.isRequired
  }

  onChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onQuerySubmit(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    return(
      <div id="search-bar">
        <input
          id="search-term"
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit} id="search-btn">
          Search
        </button>
      </div>
    )
  }
};

export default SearchArea;
