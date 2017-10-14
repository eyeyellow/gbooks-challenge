import qs from 'qs';

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
const BOOKS_KEY = process.env.BOOKS_KEY;

// Renders an error message
function showError(msg) {
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
    return response.json()
  });
}

// Generate HTML and sets #results's contents to it
export function render() {
  console.log(this.state.books)
}
