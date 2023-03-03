const Book = (props) => {
  const {
    title, category, author, percent,
  } = props;
  return (
    <div className="bookCard">
      <div className="bookInfo">
        <div className="infos">
          <span className="bookCategory">{category}</span>
          <span className="bookTitle">{title}</span>
          <span className="bookAuthor">{author}</span>
        </div>
        <ul className="actions">
          <li>
            <span className="actionItem">Comments</span>
          </li>
          <li>
            <span className="separator">|</span>
          </li>
          <li>
            <button
              className="actionItem"
              type="button"
            >
              Remove
            </button>
          </li>
          <li>
            <span className="separator">|</span>
          </li>
          <li>
            <span className="actionItem">Edit</span>
          </li>
        </ul>
      </div>
      <div className="progressInfo">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>
        <div className="info">
          <span className="percentComplete">
            {percent}
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
      </div>
      <div className="progress-divider" />
      <ul className="bookProgress">
        <li>
          <div className="currentChapterContainer">
            <span className="currentChapter">
              Current Chapter
            </span>
            <span className="chapter">
              Chapter 17
            </span>
            <button className="updateBtn" type="button">Update progress</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Book;
