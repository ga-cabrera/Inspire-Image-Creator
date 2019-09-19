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
