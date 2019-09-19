//function to query random images from picsum
$("#image-button").on("click", function(){
  var number = Math.floor(Math.random()*1085);
  $("#image-container").empty();
  var queryURL = `https://picsum.photos/id/${number}/600/400`
  var img = $("<img>");
  img.attr("src", queryURL)
  img.attr("id", "picsum-image")
  $(img).appendTo("#image-container");
  console.log(number);
});
    
