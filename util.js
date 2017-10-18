export const = resizeContainer = (newLength) => {
  const container = document.querySelector('.container')
  container.style.height = `${(105 + (newLength * 212))}px`
};

export const = uniqBooksById = (currentBooks, newBooks) => {
  const books = currentBooks.concat(newBooks);
  const seen = {};
  return books.filter(book => {
      return seen.hasOwnProperty(book.id) ? false : (seen[book.id] = true);
  });
};

export const = removePrevError = () => {
  const errMsg = document.querySelector('.error')
  if (errMsg) {
    errMsg.remove();
  }
};
