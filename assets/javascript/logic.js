var quote;
var author;
// Click event to get random quote
$("#random-quote").on("click", function () {
    $("#quote").empty();
    $("#author").empty();
    var kanyeQueryURL = "https://api.kanye.rest";
    var simpsonsQueryURL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    var ronQueryURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    var apiArr = [simpsonsQueryURL, kanyeQueryURL, ronQueryURL];
    var randomQuote = apiArr[Math.floor(Math.random() * apiArr.length)];

    //AJAX request
    $.ajax({
        url: randomQuote,
        method: "GET"
    }).then(function (response) {
        if(randomQuote === kanyeQueryURL) {
            quote = $("<p>").text(response.quote);
            author = $("<p>").text("-Kanye West");
        } else if (randomQuote === simpsonsQueryURL) {
            quote = $("<p>").text(response[0].quote);
            author = $("<p>").text("-" + response[0].character);
        } else if (randomQuote === ronQueryURL) {
            quote = $("<p>").text(response[0]);
            author = $("<p>").text("-Ron Swanson");
        }   
    });
    //Append quote to quote bin
    $("#quote").append(quote);
    $("#author").append(author);
});

//Add Quote to image
$("#add-quote").on("click", function(){
    $("#textContainer").empty();
    $("#quote").clone().appendTo("#textContainer");
});
