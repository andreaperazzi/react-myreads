import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function ListBook({books, handleBookshelfChange}) {

  const shelves = ['currentlyReading', 'wantToRead', 'read']

  // camelCase to Regular Form
  const formatText = (t) => t.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        {shelves.map( (shelf) =>
          <div key={shelf} className="bookshelf">
            <h2 className="bookshelf-title">{formatText(shelf)}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {books.filter( (book) => book.shelf === shelf )
                .map( (book) =>
                  <Book
                    key={book.id}
                    book={book}
                    handleBookshelfChange={handleBookshelfChange}
                  />
                )}
              </ol>
            </div>
          </div>
        )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBook
