import React, { Component } from 'react'
//import * as BooksAPI from '../BooksAPI'

class Options extends Component {


    handleChange = (event) => {
        //this.setState({ value: event.target.value });


        if (event.target.value !== 'none') {
            this.props.moveBook(this.props.book, event.target.value)
        }



    }

    render() {

        return (
            <select value={this.props.book.shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
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