var ratings = {};

ratings.fetchRating = function(url, target) {
  $.getJSON(url, {}, function(data) {
    $('li.icon-happy').text(data['ratings'].happy);
    $('li.icon-meh').text(data['ratings'].meh);
    $('li.icon-sad').text(data['ratings'].unhappy);
  });
};
