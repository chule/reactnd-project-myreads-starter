import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookDisplay from './BookDisplay'

class ListBooks extends Component {



    render() {

        const { books, moveBook } = this.props

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
                                    {books.length > 0 &&
                                        books.filter(book => {
                                            return book.shelf === "currentlyReading"
                                        }).map((book) => {
                                            return <BookDisplay key={book.id} book={book} moveBook={moveBook} />
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">


                                    {books.length > 0 &&
                                        books.filter(book => {
                                            return book.shelf === "wantToRead"
                                        }).map((book) => {
                                            return <BookDisplay key={book.id} book={book} moveBook={moveBook}/>
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {books.length > 0 &&
                                        books.filter(book => {
                                            return book.shelf === "read"
                                        }).map((book) => {
                                            return <BookDisplay key={book.id} book={book} moveBook={moveBook}/>
                                        })
                                    }


                                </ol>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="open-search">
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