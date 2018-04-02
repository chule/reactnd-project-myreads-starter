import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookDisplay from './BookDisplay'
import * as BooksAPI from '../BooksAPI'


class ListBooks extends Component {



    render() {

        console.log(this.props.books)

        const { books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.length &&
                                        books.filter(book => {
                                            return book.shelf === "currentlyReading"
                                        }).map((book) => {
                                            return <BookDisplay key={book.id} book={book} />
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">


                                    {books.length &&
                                        books.filter(book => {
                                            return book.shelf === "wantToRead"
                                        }).map((book) => {
                                            return <BookDisplay key={book.id} book={book} />
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {books.length &&
                                        books.filter(book => {
                                            return book.shelf === "read"
                                        }).map((book) => {
                                            return <BookDisplay key={book.id} book={book} />
                                        })
                                    }

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> */}

                    <Link
                        to="/search"
                    >
                        Add Contact
                    </Link>

                </div>
            </div>
        )
    }
}

export default ListBooks