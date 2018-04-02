import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import * as BooksAPI from '../BooksAPI'
//import BookDisplay from './BookDisplay'

class SearchBooks extends Component {

    state = {
        books: []
    }

    render() {
        //const { title, authors, imageLinks } = this.state.books
        return (

            <div className="search-books">
                <div className="search-books-bar">
                    {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
                    <Link
                        to='/'
                        className="close-search"
                    />

                    <div className="search-books-input-wrapper">
                        {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                        <input type="text" placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* {this.state.books.length && 
                            this.state.books.map((book) => {
                                return <BookDisplay key={book.id} title={book.title} authors={book.authors} imageLinks={book.imageLinks}/>
                            })
                        } */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks