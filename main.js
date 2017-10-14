import qs from 'qs';
import ReactDOM from 'react-dom';

import Result from './components/result.js'

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
const BOOKS_KEY = process.env.BOOKS_KEY;

// Renders an error message
export function showError(msg) {
  const html = `<li><p class="error">${msg}</p></li>`;
  document.querySelector('#results').innerHTML = html;
}

// Searches for books and returns a promise that resolves a JSON list
export function searchForBooks(term) {
  const params = qs.stringify({ key: BOOKS_KEY, q: term })
  const urlWithParams = `${BOOKS_URL}?${params}`
  var request = new Request(urlWithParams, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }
  );

  return fetch(request).then(response => {
    let json = response.json()
    if (response.ok) {
      return json
    } else {
      return json.then(err => Promise.reject(err))
    }
  });
}

// Generate HTML and sets #results's contents to it
export function render() {
  this.state.books.forEach((book) => {
    let newItem = document.createElement('li');
    newItem.setAttribute("id", book.id)
    document.querySelector('#results').appendChild(newItem)
    ReactDOM.render(<Result book={book} />, document.getElementById(book.id));
  })
}
