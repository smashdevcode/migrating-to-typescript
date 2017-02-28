
getData().done(function (data) {
  let booksContent = '';
  data.data.forEach(function (book) {
    booksContent += `<h2>${book.title}</h2>`;
    if (book.ratings.length > 0) {
      let ratingsContent = '';
      book.ratings.forEach(function (rating) {
        ratingsContent += `<li>Rating: ${rating.rating} - <i>${rating.comment}</i> - <b>${rating.username}</b></li>`;
      });
      booksContent += `<ul>${ratingsContent}</ul>`;
    }
  });
  $('#books').append(booksContent);
});
