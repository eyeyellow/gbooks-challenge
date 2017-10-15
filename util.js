export function resizeContainer() {
  const container = document.querySelector('.container')
  const currentHeight = window.getComputedStyle(container, null).height
  const heightValue = parseInt(currentHeight, 10)
  container.style.height = `${(heightValue + 2120)}px`
}

export function uniqBooksById(currentBooks, newBooks) {
  const totalBooks = currentBooks.concat(newBooks)
    var seen = {};
    var uniqBooks = [];
    var len = totalBooks.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var id = totalBooks[i].id;
         if(seen[id] !== 1) {
               seen[id] = 1;
               uniqBooks[j++] = totalBooks[i];
         }
    }
  return uniqBooks
}
