getData().done(function (data) {
    var booksContent = '';
    data.data.forEach(function (book) {
        booksContent += "<h2>" + book.title + "</h2>";
        if (book.ratings.length > 0) {
            var ratingsContent_1 = '';
            book.ratings.forEach(function (rating) {
                ratingsContent_1 += "<li>Rating: " + rating.rating + " - <i>" + rating.comment + "</i> - <b>" + rating.username + "</b></li>";
            });
            booksContent += "<ul>" + ratingsContent_1 + "</ul>";
        }
    });
    $('#books').append(booksContent);
});
