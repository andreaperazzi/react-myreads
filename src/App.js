import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  handleBookshelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {

      // Set the shelf for the book
      book.shelf = shelf

      // Get the actual lis of the books
      const updatedBooks = this.state.books.filter( b => b.id !== book.id)

      // Add the new book to the list
      updatedBooks.push(book)
      this.setState({books: updatedBooks})
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
            handleBookshelfChange={this.handleBookshelfChange}
          />
        )} />

        <Route path="/search" render={() => (
          <Search
            books={books}
            handleBookshelfChange={this.handleBookshelfChange}
           />
        )} />
      </div>
    )
  }
}

export default BooksApp