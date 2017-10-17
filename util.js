
export function resizeContainer(newLength) {
  const container = document.querySelector('.container')
  container.style.height = `${(105 + (newLength * 212))}px`
};

export function uniqBooksById(currentBooks, newBooks) {
  const books = currentBooks.concat(newBooks);
  const seen = {};
  return books.filter(book => {
      return seen.hasOwnProperty(book.id) ? false : (seen[book.id] = true);
  });
};
