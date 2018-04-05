import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import BookDisplay from './BookDisplay'

class Bookshelf extends PureComponent {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired,
        bookshelfTitle: PropTypes.string.isRequired,
        shelfDisplay: PropTypes.string.isRequired
    }

    render() {

        const {books, moveBook, bookshelfTitle, shelfDisplay} = this.props

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

}

export default Bookshelf