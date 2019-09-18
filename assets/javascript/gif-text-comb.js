function myCanvas() { // what does this function do? It appears it's just setting canvas div to 2d and setting any text content to arial 30 with certain stroke weight. Its that it?
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("picsum-image"); // where does "gif-image" exist?
    ctx.drawImage(img,10,10);
    $("#image-container").empty();
    $(img).appendTo("#image-container");

    // var quote = document.getElementById("textContainer").textContent;//Random quote API area
    // ctx.font = "25px Georgia";
    // var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    // gradient.addColorStop("0", "magenta");
    // gradient.addColorStop("0.5", "blue");
    // gradient.addColorStop("1.0", "red");
    // ctx.fillStyle = gradient;
    // ctx.fillText(quote, 150, 50,399);

}
