import React from 'react'
import Options from './Options'

const BookDisplay = ({book, moveBook}) => {
    const { title, authors, imageLinks } = book
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <Options book={book} moveBook={moveBook}/>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}

export default BookDisplay