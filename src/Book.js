import React, { Component } from 'react'


class Book extends Component {

  state = {
    book: this.props.book,
    shelf: this.props.book.shelf
  }

  handleChange = (event) => {
    this.setState({shelf: event.target.value})

    if(this.props.onChangeShelf) {
      this.props.onChangeShelf(this.state.book, event.target.value)
    }
  }

  render(){

    // object destructuring
    const { book } = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book