const Result = ({ book }) => {
  const { title,
          imageLinks,
          subtitle,
          authors,
          previewLink } = book.volumeInfo
  return(
    <div className="result">
      <a href={previewLink && previewLink} target="_blank">
        <h3 className="result-title">
          {title && title}
        </h3>
      </a>
      <div className="result-body">
        <a href={previewLink && previewLink} target="_blank">
          <img
            className="book-thumbnail"
            src={imageLinks && imageLinks.smallThumbnail && imageLinks.smallThumbnail}
          />
        </a>
        <div className="book-data">
          <i>{subtitle && subtitle}</i>
          <p>
            {authors && `by ${authors.join(', ')}`}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Result;
