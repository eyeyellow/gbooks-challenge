import qs from 'qs';

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
const BOOKS_KEY = process.env.BOOKS_KEY;

export const fetchBooks = (keywords) => {
  const params = qs.stringify({ key: BOOKS_KEY, q: keywords })
  const urlWithParams = `${BOOKS_URL}?${params}`
  var request = new Request(urlWithParams, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }
  );

  fetch(request).then((response) => {
    response.json().then((data) => console.log(data))
  });
};
