//function to query random images from picsum
$("#image-button").on("click", function(){
  var queryURL = "https://picsum.photos/600/400"
  var img = $("<img>");
  img.attr("src", queryURL)
  img.attr("id", "picsum-image")
  $("#image-container").empty();
  $(img).appendTo("#image-container");
});
    
