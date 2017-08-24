import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Bookshelf extends Component {

  updateBookshelf = (book, shelf) => this.props.onUpdateBookshelf(book, shelf)

  render(){

    // object destructuring
    const { title, books } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              onChangeShelf={(book, shelf) => this.updateBookshelf(book, shelf)}
            />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


class BookList extends Component {

  state = {
    books: this.props.books
  }

  updateList = (book, shelf) => {

    this.setState((state) => {

    })

    this.props.onUpdateList(book, shelf)
  }

  render(){

    // object destructuring
    const { books } = this.props

    const currentlyReading = books.filter( (book) => book.shelf === 'currentlyReading')
    const wantToRead = books.filter( (book) => book.shelf === 'wantToRead')
    const read = books.filter( (book) => book.shelf === 'read')


    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title='Currently Reading'
              books={currentlyReading}
              onUpdateBookshelf={(book, shelf) => this.updateList(book, shelf)}
            />
            <Bookshelf
              title='Want To Read'
              books={wantToRead}
              onUpdateBookshelf={(book, shelf) => this.updateList(book, shelf)}
            />
            <Bookshelf
              title='Read'
              books={read}
              onUpdateBookshelf={(book, shelf) => this.updateList(book, shelf)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList
