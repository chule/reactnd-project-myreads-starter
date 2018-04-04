import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import BookDisplay from './BookDisplay'

class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        bookAction: PropTypes.func.isRequired,
        updateQuery: PropTypes.func.isRequired,
        searchList: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired
    }

    onUpdateQuery(query) {
        this.props.updateQuery(query)
    }

    render() {

        const { query, searchList, books } = this.props

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                        onClick={() => this.onUpdateQuery('')} // if removed search query stays on search page
                    />

                    <div className="search-books-input-wrapper">

                        <input
                            value={query}
                            onChange={(event) => this.onUpdateQuery(event.target.value)}
                            type="text"
                            placeholder="Search by title or author"
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchList.length > 0 &&
                            searchList.map((book) => {
                                return <BookDisplay key={book.id} book={book} bookAction={this.props.bookAction} onShelf={books} />
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks