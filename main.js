import qs from 'qs';
import ReactDOM from 'react-dom';

import Result from './components/result.js'

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
const BOOKS_KEY = process.env.BOOKS_KEY;

// Renders an error message
export function showError(msg) {
  const error = document.createElement('li');
  error.innerHTML = `<div class="error">${msg}</div>`;
  const results = document.querySelector('#results');
  const firstEntry = results.firstChild;
  results.insertBefore(error, firstEntry);
  // The original code below will stil work. I just want this
  // function to insert the error at the top of the list, instead
  // of replacing the results on the page, in the case of an error
  // following a successful response.
  //
  // const html = `<li><div class="error">${msg}</div></li>`;
  // document.querySelector('#results').innerHTML = html;
}

// Searches for books and returns a promise that resolves a JSON list
export function searchForBooks(term) {
  const params = qs.stringify({ key: BOOKS_KEY, q: term })
  const urlWithParams = `${BOOKS_URL}?${params}`
  const request = new Request(urlWithParams, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }
  );

  return fetch(request).then(response => {
    const json = response.json()
    if (response.ok) {
      return json
    } else {
      return json.then(response => Promise.reject(response.error))
    }
  });
}

// Generate HTML and sets #results's contents to it
export function render() {
  this.state.books.forEach((book) => {
    let newItem = document.createElement("li");
    newItem.setAttribute('id', book.id)
    document.querySelector('#results').appendChild(newItem)
    ReactDOM.render(<Result book={book} />, document.getElementById(book.id));
  })
}
