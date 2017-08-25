import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookList from './BookList'
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
      book.shelf = shelf
      this.setState( state => state )
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
            handleBookshelfChange={this.handleBookshelfChange}
          />
        )} />

        <Route path="/search" render={() => (
          <Search />
        )} />

      </div>
    )
  }
}

export default BooksApp
