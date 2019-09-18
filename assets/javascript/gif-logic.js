//function to query random images from picsum
$("#newImageButton").on("click", function(){
  var number = Math.floor(Math.random()*1085);
  var queryURL = "https://picsum.photos/id/" + number + "/200/200"
  var img = $("<img>");
  img.attr("src=", queryURL)
  console.log(img);
  $("#myCanvas").empty();
  $(img).appendTo("#myCanvas");
    //get the image and append to the image container
    $("#image-button").on("click", function(){ 
      $(img).appendTo("#image-container");
    });
});
    
