
const Result = ({ book }) => (
  <div className="result">
    <h2 className="result-title">
      {book.volumeInfo.title}
    </h2>
    <div className="result-body">
      <img
        className="book-thumbnail"
        src={book.volumeInfo.imageLinks.smallThumbnail}
      />
      <div className="book-data">
        <h3 className="book-subtitle">
          {book.volumeInfo.subtitle}
        </h3>
        <p>
          {`by ${book.volumeInfo.authors.join(', ')}`}
        </p>
      </div>
    </div>
  </div>
);

export default Result;
