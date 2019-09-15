// initial variable
var topics = "";
topicsclicker2 = ".git-topic-button";

// Adding click event listen listener to all buttons
function gifclick(a){
    $(a).on("click", function() {
        $("#gif-container").empty();
        // In this case, the "this" keyword refers to the button that was clicked
        // var topicName = $(this).attr("topic");
        var topicName = topics;
        console.log(topicName);

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + topicName;
        console.log(queryURL);

        // Performing our AJAX GET request
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        // After the data comes back from the API
        .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
            console.log(results);
            console.log(response);

            var gifDiv = $("<div class='image-content'>");

            // Creating an image tag
            var personImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            personImage.attr("src", results.images.fixed_height_still.url);
            personImage.attr("data-still", results.images.fixed_height_still.url);
            personImage.attr("data-animate", results.images.fixed_height.url);
            personImage.attr("data-state", "still");
            personImage.addClass("image-btn");

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(personImage);
            console.log(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gif-container").prepend(gifDiv);
            
        });
    });

}

$(document).on("click",".image-btn", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
    $(this).attr("id", 'animate-btn');
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
    $(this).attr("id", 'state-btn')
  }
});

// Creating an  event handler function to show user input as a topicBtn when add-topic button is clicked
$("#gif-button").on("click", function(event){
  event.preventDefault();
  //Grabbing the input from the textbox
  var newSearch = $("input").eq(0).val();
  // Creating a variable to check empty input
  var emptyinput = document.forms["search-form"]["gif-search"].value;
  // Checking if there is an empty input
	// If yes - ask user to input again
  if (emptyinput == ""){
    alert("Please input your favorite Sport team"); 
  } else{
    //Adding new input from usesr into topics array
    topics = newSearch;
    console.log(topics);
    return false;
  }
})

gifclick(topicsclicker2);
