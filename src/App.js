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

  addBook = (book, shelf) => {
    this.setState(currentState => {
      return {
        books: [...currentState.books, { ...book, shelf }]
      }
    })

    BooksAPI.update(book, shelf)
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
          /*
            sometimes data from API returns after user deletes 
            all search query so this prevents updating state
           */
          if (this.state.query !== '') {
            this.setState(() => ({
              searchList: data
            }))
          }
        }
      })

    }
    
  }

  render() {

    const {books, searchList, query} = this.state

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks books={books} bookAction={this.moveBook} />)
        }/>

        <Route path="/search" render={() => (
          <SearchBooks
            books={books}
            bookAction={this.addBook}
            updateQuery={this.updateQuery}
            searchList={searchList}
            query={query}
          />)
        }/>

      </div>
    )
  }
}

export default BooksApp