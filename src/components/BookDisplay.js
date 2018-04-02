import React from 'react'
import Options from './Options'

const BookDisplay = ({book, moveBook}) => {
    const { title, authors, imageLinks } = book
    const authorsList = authors.map((author, i) => {
        return i === authors.length - 1 
            ? <span key={i}>{`${author}`}</span>
            : <span key={i}>{`${author}, `}</span>
    })

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
                <div className="book-authors">{authorsList}</div>
            </div>
        </li>
    )
}

export default BookDisplay