// initial variable
var topics = "";
topicsclicker2 = ".git-topic-button";

// Adding click event listen listener to all buttons
function gifclick(a){
    $(a).on("click", function() {
        $("#gif-container").empty();
        // In this case, the "this" keyword refers to the button that was clicked
        var topicName = topics;
        console.log(topicName);
        //generates a random number between 1 and 25
        var randomNumber = Math.floor(Math.random() * 25) + (Math.floor(Math.random() * 10));
        // the offset will be a random number between 1-25 + 1-10
        var offset = `&offset=${randomNumber}`;
        // url with api key
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10" + offset;
        console.log(queryURL)
        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          var results = response.data;
          // loops through their response
          for (var i = 0; i < results.length; i++) {
            // for each response, create a div with .gif-item
            var gifItem = $("<div class=\"gif-item\">");
            var title = results[i].title;
            var gifTitle = $("<p>").text(`Title: ${title}`);
            var gifAnimated = results[i].images.fixed_height.url;
            console.log(response);

          }
          // adds source to gif image files
          var gif = $("<img>");
          gif.attr("src", gifAnimated);
          // appends gif to gif container
          gifItem.append(gif);
          gifItem.append(gifTitle);
          $("#gif-container").prepend(gifItem);
        })
    });

}

// $(document).on("click",".image-btn", function() {
//   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//   var state = $(this).attr("data-state");
//   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//   // Then, set the image's data-state to animate
//   // Else set src to the data-still value
//   if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//     $(this).attr("id", 'animate-btn');
//   } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//     $(this).attr("id", 'state-btn')
//   }
// });

// Creating an  event handler function to show user input as a topicBtn when add-topic button is clicked
$("#gif-button").on("click", function(event){
  event.preventDefault();
  //Grabbing the input from the textbox
  var newSearch = $("input").eq(0).val();
  // Creating a variable to check empty input
  var emptyinput = document.forms["search-form"]["gif-search"].value;
    //Adding new input from usesr into topics array
    topics = newSearch;
    console.log(topics);
})

gifclick(topicsclicker2);