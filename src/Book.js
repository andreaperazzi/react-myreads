import React from 'react'

function Book({book, books, handleBookshelfChange}) {

  const { imageLinks, title, authors, publisher } = book

  // set current shelf to none as default
  let currentShelf = 'none'

  // if book is already in a shelf, set currentShelf to book.shelf
  books.map( item =>
    item.id === book.id && (
      currentShelf = item.shelf
    )
  )

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={currentShelf} onChange={(event) => handleBookshelfChange(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? authors.join(', ') : publisher}</div>
      </div>
    </li>
  )
}

export default Book