import React from 'react'
import PropTypes from "prop-types"
import Options from './Options'
import noImage from '../icons/noImage.png'

const BookDisplay = ({ book, bookAction, onShelf }) => {
    const { title, authors, imageLinks } = book
    let authorsList, image

    if (authors) {
        authorsList = authors.map((author, i) => {
            return i === authors.length - 1
                ? <span key={i}>{`${author}`}</span>
                : <span key={i}>{`${author}, `}</span>
        })
    }

    if (onShelf) {
        onShelf.forEach(b => {
            if (b.id === book.id) {
                book = b
            }
        })
    }

    if (!imageLinks) {
        image = noImage
    } else {
        image = imageLinks.smallThumbnail
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <div className="book-shelf-changer">
                        <Options book={book} bookAction={bookAction} />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authorsList}</div>
            </div>
        </li>
    )
}

BookDisplay.propTypes = {
    book: PropTypes.object.isRequired,
    bookAction: PropTypes.func.isRequired,
    onShelf: PropTypes.array
}

export default BookDisplay