$(document).ready(function () {
  $(".button").click(function (e) {
    let count = $("#count").val();
    let tags = $("#tags").val();
    if (tags.length === 0) {
      alert("Please enter tags");
    } else {
      $.ajax({
        type: "POST",
        url:
          "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ecd6bcbbdd394cc522d8014dcbc090fc&tags=" +
          tags +
          "&extras=url_sq&per_page=" +
          count +
          "&page=1&format=json&nojsoncallback=1",
        dataType: "json",
        success: function (response) {
          if (response) {
            const photos = response.photos.photo;
            photos.forEach((photo) => {
              $(`  <div class="element">
                    <img
                        title=${photo.title}
                        src=${photo.url_sq}
                    />
                    <div class="title">${photo.title}</div>
                </div>`).appendTo(".content");
            });
          }
        },
      });
    }
  });
});
