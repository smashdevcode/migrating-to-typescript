const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// public website
app.use('/', express.static('public'));

// vendor scripts
app.get('/vendor/jquery.min.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'jquery', 'dist', 'jquery.min.js'));
});

// api
var booksRouter = require('./routes/booksRoutes.js')();
app.use('/api/books', booksRouter);

app.listen(port);
console.log('Magic happens on port ' + port);
