import React from 'react'
import PropTypes from "prop-types"
import BookDisplay from './BookDisplay'

const Bookshelf = ({ books, moveBook, bookshelfTitle, shelfDisplay }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.length > 0 &&
                        books.filter(book => {
                            return book.shelf === shelfDisplay
                        }).map((book) => {
                            return <BookDisplay key={book.id} book={book} moveBook={moveBook} />
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    bookshelfTitle: PropTypes.string.isRequired,
    shelfDisplay: PropTypes.string.isRequired
}

export default Bookshelf