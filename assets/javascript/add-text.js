//add the text from the Add Quote! form input to the BOX area where both the gif and text are displayed
var text = $("#addText")
$("#add-text-button").on("click", function(event){
    event.preventDefault();
    $("#textContainer").text(text[0].value);
});
