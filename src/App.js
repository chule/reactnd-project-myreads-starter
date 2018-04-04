import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchList: [],
    query: ''
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
          return b.id === book.id
            ? { ...b, shelf }
            : b
        })
      }
    })

    BooksAPI.update(book, shelf)
  }

  updateQuery = (query) => {

    if (query.trim() === '') {
      this.setState(() => ({
        query: '',
        searchList: []
      }))
    } else {
      this.setState(() => ({
        query: query
      }))

      const searthTerm = query.trim()
      BooksAPI.search(searthTerm).then(data => {
        if (data) {
          if (this.state.query !== '') {
            this.setState(() => ({
              searchList: data
            }))
          }
        }
      })
    }
  }

  addBook = (book, shelf) => {

    this.setState(currentState => {
      return {
        books: [...currentState.books, { ...book, shelf }]
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
          <SearchBooks
            books={this.state.books}
            bookAction={this.addBook}
            updateQuery={this.updateQuery}
            searchList={this.state.searchList}
            query={this.state.query}
          />)
        } />

      </div>
    )
  }
}

export default BooksApp
