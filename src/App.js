import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }


// createContact = (contact) => {
//     ContactsAPI.create().then((contacts) => {
//       this.setState((state) => ({
//         contacts: state.contacts.concat([ contact ])
//         }))
//       })
//     }

  updateList = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.setState(({books}))
    })
  }


  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
            onUpdateList={(book, shelf) => this.updateList(book, shelf)}
          />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks />
        )} />

      </div>
    )
  }
}

export default BooksApp
