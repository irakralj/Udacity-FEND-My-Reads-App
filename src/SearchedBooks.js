import React, {Component} from 'react'
import SearchBooks from './Search'

class SearchedBook extends Component {
  render () {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")`
          }} />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors.map((author) =>
          <div key={author}>{author}</div>
      )}</div>
      </div>
    )
  }
}

export default SearchedBook
