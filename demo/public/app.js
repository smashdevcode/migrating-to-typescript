
getData().done(function (data) {
  const booksDiv = $('#books');
  data.data.forEach(function (book) {
    booksDiv.append(`<h2>${book.title}</h2>`);
    if (book.ratings.length > 0) {
      let ratingsContent = '';
      book.ratings.forEach(function (rating) {
        ratingsContent += `<li>Rating: ${rating.rating} - <i>${rating.comment}</i> - <b>${rating.username}</b></li>`;
      });
      booksDiv.append(`<ul>${ratingsContent}</ul>`);
    }
  });
});
