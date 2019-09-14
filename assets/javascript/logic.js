// Click event to get quote
$("#random-quote").on("click", function(){
    var kanyeQueryURL = "https://api.kanye.rest?format=text";
    //AJAX request
    $.ajax({
        url: kanyeQueryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(kanyeQueryURL);
        console.log(response);
        // var results = response.data;
        // var p = $("<p>").text(results)
        // $("#quote").append(p)
    })
})