// function myCanvas() { 
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     var img = document.getElementById("picsum-image")
//     ctx.drawImage(img,10,10);
//     $("#image-container").empty();
//     $(img).appendTo("#image-container");

//     var quote = document.getElementById("textContainer").textContent;//Random quote API area
//     ctx.font = "25px Georgia";
//     ctx.fillText(quote, 20,50);
//     var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
//     gradient.addColorStop("0", "magenta");
//     gradient.addColorStop("0.5", "blue");
//     gradient.addColorStop("1.0", "red");
//     ctx.fillStyle = gradient;
//     ctx.fillText(quote, 150, 50,399);

// }
var text = document.getElementById("textContainer").textContent;
var canvas = document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText(text, canvas.width/2, canvas.height/2);

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("picsum-image");
   ctx.drawImage(img, 10, 10);
   $("#image-container").empty();
   $(img).append("#image-container");
   addTextToCanvas();
};
