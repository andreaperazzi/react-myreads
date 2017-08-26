import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

  state = {
    query: '',
    results: [],
    searchErr: false
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.getBooks(query)
  }

  clearQuery = () => {
    this.setState({ query: '', results: [], searchErr: false})
  }

  getBooks = (query) => {
    query ?
      BooksAPI.search(query).then( results => {
        results.length > 0 ? this.setState({ results }) : this.setState({ results:[], searchErr: true})
      })
    : this.clearQuery()
  }

  componentDidMount(){
    this.nameInput.focus();
  }

  render(){
    const { results, searchErr } = this.state
    const { handleBookshelfChange, books } = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              ref={(input) => { this.nameInput = input; }}
            />
          </div>
        </div>
        <div className="search-books-results">
          { results.length > 0 && (
            <ol className="books-grid">
              {results.map( (book) =>
                  <Book
                    key={book.id}
                    book={book}
                    books={books}
                    handleBookshelfChange={handleBookshelfChange}
                    autoFocus
                  />
                )}
            </ol>
          )}
          { searchErr  && (
            <div>
              <div className='error-message'>
                <p>Not books found with this search. Please try again!</p>
                </div>
              </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search
