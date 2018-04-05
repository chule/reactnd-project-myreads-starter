import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import Options from './Options'
import noImage from '../icons/noImage.png'

class BookDisplay extends PureComponent {

    componentWillMount() {

        const { title, authors, imageLinks } = this.props.book

        this.title = title

        if (authors) {
            this.authorsList = authors.map((author, i) => {
                return i === authors.length - 1
                    ? <span key={i}>{`${author}`}</span>
                    : <span key={i}>{`${author}, `}</span>
            })
        }

        if (this.props.searchBooks) {
            this.bookAction = this.props.addBook
            this.book = this.props.book
            this.props.onShelf.forEach(b => {
                if (b.id === this.props.book.id) {
                    this.book = b
                    this.bookAction = this.props.moveBook
                }
            })

        } else {
            this.bookAction = this.props.moveBook
            this.book = this.props.book
        }

        if (!imageLinks) {
            this.image = noImage
        } else {
            this.image = imageLinks.smallThumbnail
        }
    }

    render() {

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.image})` }}></div>
                        <div className="book-shelf-changer">
                            <Options book={this.book} bookAction={this.bookAction} />
                        </div>
                    </div>
                    <div className="book-title">{this.title}</div>
                    <div className="book-authors">{this.authorsList}</div>
                </div>
            </li>
        )
    }

}

BookDisplay.propTypes = {
    book: PropTypes.object.isRequired,
    onShelf: PropTypes.array,
    searchBooks: PropTypes.bool,
    moveBook: PropTypes.func.isRequired,
    addBook: PropTypes.func
}

export default BookDisplay