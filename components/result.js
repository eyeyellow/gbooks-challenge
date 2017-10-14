
const Result = ({ book }) => {
  const { title,
          imageLinks,
          subtitle,
          authors } = book.volumeInfo
  return(
    <div className="result">
      <h2 className="result-title">
        {title && title}
      </h2>
      <div className="result-body">
        <img
          className="book-thumbnail"
          src={imageLinks && imageLinks.smallThumbnail && imageLinks.smallThumbnail}
        />
        <div className="book-data">
          <h3 className="book-subtitle">
            {subtitle && subtitle}
          </h3>
          <p>
            {authors && `by ${authors.join(', ')}`}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Result;
