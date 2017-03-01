const express = require('express');
const data = require('../data');
const books = function () {
    var booksRouter = express.Router();
    booksRouter.route('/')
        .get(function (req, res) {
        res.json({
            data: data
        });
    });
    return booksRouter;
};
module.exports = books;
