import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookDisplay from './BookDisplay'

class SearchBooks extends Component {

    state = {
        query: '',
        bookList: []
    }

    updateQuery = (query) => {

        //console.log('query',query)
        if (query.trim() === '') {

            console.log('query is empty')
            this.setState(() => ({
                query: '',
                bookList: []
            }))
        } else {
            this.setState(() => ({
                query: query //.trim()
            }))

            const searthTerm = query.trim()
            console.log('searthTerm', searthTerm)
            BooksAPI.search(searthTerm).then(data => {
                console.log(data)
                if (data) {
                    this.setState(() => ({
                        bookList: data
                    }))
                }
            })
        }
    }

    render() {

        const { query, bookList } = this.state

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
                    <Link
                        to='/'
                        className="close-search"
                    />

                    <div className="search-books-input-wrapper">
                        {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                        <input
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            type="text"
                            placeholder="Search by title or author"
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {bookList.length > 0 &&
                            bookList.map((book) => {
                                return <BookDisplay key={book.id} book={book} bookAction={this.props.bookAction} />
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks