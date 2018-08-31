import React, {Component} from 'react'


class Books extends Component {
  state = {
    shelf: this.props.shelf
  }

  newShelf = (e) => {
    this.props.onUpdate(e.target.value)
    this.setState({shelf: e.target.value})
  }

  render () {
    if (Object.keys(this.props.book).includes('authors') && Object.keys(this.props.book).includes('imageLinks')) {
    return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193,
                  backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")`
                }} />
                <div className="book-shelf-changer">
                  <select onChange={this.newShelf} value={this.state.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors"> {this.props.book.authors.map((author) =>
                <div key={author}>{author}</div>
            )}</div>
            </div>

    )
  } else if (Object.keys(this.props.book).includes('imageLinks')) {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")`
          }} />
          <div className="book-shelf-changer">
            <select onChange={this.newShelf} value={this.state.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
      </div>

)
  } else {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-shelf-changer">
            <select onChange={this.newShelf} value={this.state.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors"> {this.props.book.authors.map((author) =>
          <div key={author}>{author}</div>
      )}</div>
      </div>
    )
  }
}}

export default Books
