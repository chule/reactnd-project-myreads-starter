import React, { Component } from 'react'
import PropTypes from "prop-types"

class Options extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        bookAction: PropTypes.func.isRequired
    }

    handleChange = (event) => {
        if (event.target.value !== 'none') {
            this.props.bookAction(this.props.book, event.target.value)
        }
    }

    render() {

        let { book } = this.props

        return (
            <select value={book.shelf || "none"} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default Options