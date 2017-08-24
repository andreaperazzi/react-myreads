import React from 'react'

function Book({book, handleBookshelfChange}) {

  const { imageLinks, shelf, title, authors} = book

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => handleBookshelfChange(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
          {authors && authors.map( author =>
            <div key={author} className="book-authors">{author}</div>
          )}
      </div>
    </li>
  )
}

export default Book