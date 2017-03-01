"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rating = require("./rating");
class Book {
    /**
     * @param {string} title - The title of the book.
     * @param {string} publisher - The publisher of the book.
     */
    constructor(title, publisher) {
        this.title = title;
        this.publisher = publisher;
        this.ratings = [];
    }
    /**
     * @param {string} username - The username for the rating.
     * @param {number} rating - The rating that the user is giving the book.
     * @param {string} comment - The comment that the user is giving the book.
     * @returns {Rating} Returns a Rating object.
     */
    addRating(username, rating, comment) {
        let ratingObj = new Rating(username, rating, comment);
        this.ratings.push(ratingObj);
        return ratingObj;
    }
}
module.exports = Book;
