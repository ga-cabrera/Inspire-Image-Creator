//function to query random images from picsum
$("#image-button").on("click", function(){
  var number = Math.floor(Math.random()*1085);
  var queryURL = "https://picsum.photos/id/" + number + "/400/400"
  var img = $("<img>");
  img.attr("src", queryURL)
  img.attr("id", "picsum-image")
  console.log(img);
  $("#image-container").empty();
  $(img).appendTo("#image-container");
});
    
