import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import SearchBooks from './Search'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

BooksAPI.getAll().then((b) => console.log(b))

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then(books => {
        this.setState({ books: books })
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>{
      BooksAPI.getAll().then(books => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <div className="app">

          <Route exact path="/" render={() => (<Shelf books={this.state.books} onChangeShelf={this.changeShelf} />)} />
          <Route exact path="/search" render={({history}) => (<SearchBooks books={this.state.books} onChangeShelf={this.changeShelf} />)} />

      </div>
    )
  }
}

export default BooksApp
