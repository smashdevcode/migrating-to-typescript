
const Rating = require('./rating');

class Book {
  constructor(title, publisher) {
    this.title = title;
    this.publisher = publisher;
    this.ratings = [];
  }

  addRating(username, rating, comment) {
    let ratingObj = new Rating(username, rating, comment);
    this.ratings.push(ratingObj);
    return ratingObj;
  }
}

module.exports = Book;
