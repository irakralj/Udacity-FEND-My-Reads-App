import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Books from './Books'

const shelves = [{
  shelf: 'currentlyReading'
}, {
  shelf: 'wantToRead'
}, {
  shelf: 'read'
}]



class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }


  updateShelf = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
  }

  handleChange = (event) => {
    this.setState({query: event.target.value})
    BooksAPI.search(event.target.value).then((books) => {
        if (books.length > 0) {
          this.setState({books: books})
        } else {
          this.setState({books: []})
        }
    })
    if (event.target.value === '') {
      this.setState({books: []})
    }
  }

  checkIfMyBook = function (book) {
    if (this.props.books.find((b) => b.title === book.title) !== undefined) {
      return this.props.books.find((b) => b.title === book.title).shelf
    } else {
      return 'none'
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) =>
              <li key={book.id}>

                <Books book={book} shelf={this.checkIfMyBook(book)} onUpdate={(shelf) => {this.updateShelf(book, shelf)}} />

              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks




/* if (books.length > 0) {
  this.setState({books: books})
} else {
  this.setState({books: []})
} */


//this.props.books[this.props.books.findIndex((b) => b.title===book.title)]
//this.props.books.find(function (b) {return b.id===book.id})