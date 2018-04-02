import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: ['currentlyReading', 'wantToRead', 'read']
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => {
        return { books }
      })
    })
  }

  moveBook = (book, shelf) => {
    this.setState(currentState => {
      return {
        books: currentState.books.map(b => {
          if (b.id === book.id) {
            return { ...b, shelf }
          } else {
            return b
          }
        })
      }
    })

    BooksAPI.update(book, shelf)
  }

  addBook = (book, shelf) => {

    console.log("bookAction addBook")
    this.setState(currentState => {
      return {
        books: [...currentState.books, {...book, shelf}]
      }
    })

    BooksAPI.update(book, shelf)
  }


  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} bookAction={this.moveBook} />)
        } />

        <Route path="/search" render={() => (
          <SearchBooks bookAction={this.addBook} />)
        } />

      </div>
    )
  }
}

export default BooksApp
