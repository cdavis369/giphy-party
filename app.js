async function getGif(search) {
  $("input").val("");
  const url = "https://api.giphy.com/v1/gifs/search?api_key=lnNfQiH6jkRKh0zDusK0DDmlnOqnEboR";
  const q = `&q=${search}`;
  const response = await axios.get(url + q);
  const i = Math.floor(Math.random() * response.data.data.length);
  const gif = response.data.data[i].images.fixed_height;
  console.log(response.data.data[0]);
  showGif(gif);
}

function showGif(gif) {
  console.log(gif);
  console.log(gif.width);
  console.log(gif.height);
  $("#show-case").append(
    $("<div></div>").attr("class", "col col-sm-auto gif").css( {"margin-bottom": "1rem"}).append( 
      $("<img>").attr("src", gif.url) 
    )
  );
}

$(".btn-success").click((e) => {
  e.preventDefault();
  if ($("input").val())
    getGif($("input").val());
});

$(document).on("keypress", (e) => {
  if (e.which === 13 && $("input").val()) {
    console.log("pressed enter");
    getGif( $("input").val() );
  }
})

$(".btn-danger").click(() => $(".gif").remove() );