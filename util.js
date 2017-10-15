export function resizeContainer(newLength) {
  const container = document.querySelector('.container')
  container.style.height = `${(100 + (newLength * 212))}px`
}

export function uniqBooksById(currentBooks, newBooks) {
  const totalBooks = currentBooks.concat(newBooks)
    const seen = {};
    const uniqBooks = [];
    const len = totalBooks.length;
    let j = 0;
    for(var i = 0; i < len;) {
      let id = totalBooks[i].id;
      if(seen[id] !== 1) {
        seen[id] = 1;
        uniqBooks[j++] = totalBooks[i];
      }
    }
  return uniqBooks
}
