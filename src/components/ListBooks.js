import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const ListBooks = ({ books, bookAction }) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf bookshelfTitle="Currently Reading" books={books} bookAction={bookAction} shelfDisplay="currentlyReading" />

                    <Bookshelf bookshelfTitle="Want to Read" books={books} bookAction={bookAction} shelfDisplay="wantToRead" />

                    <Bookshelf bookshelfTitle="Read" books={books} bookAction={bookAction} shelfDisplay="read" />
                </div>
            </div>

            <div className="open-search">
                <Link to="/search">
                    Add Contact
                    </Link>
            </div>
        </div>
    )

}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    bookAction: PropTypes.func.isRequired
}

export default ListBooks