import React, { Component } from "react";

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>the way of kings</li>
                    <li>lord of the rings</li>
                    <li>matrix</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
