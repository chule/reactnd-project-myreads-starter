import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const ListBooks = ({ books, moveBook }) => {
    
    const shelves = [
        { bookshelfTitle: "Currently Reading", shelfDisplay: "currentlyReading" },
        { bookshelfTitle: "Want to Read", shelfDisplay: "wantToRead" },
        { bookshelfTitle: "Read", shelfDisplay: "read" }
    ]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves.map(shelf => (
                        <Bookshelf
                            key={shelf.shelfDisplay}
                            bookshelfTitle={shelf.bookshelfTitle}
                            books={books}
                            moveBook={moveBook}
                            shelfDisplay={shelf.shelfDisplay}
                        />)
                    )}
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
    moveBook: PropTypes.func.isRequired
}

export default ListBooks