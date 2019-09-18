function myCanvas() { // what does this function do? It appears it's just setting canvas div to 2d and setting any text content to arial 30 with certain stroke weight. Its that it?
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("gif-image"); // where does "gif-image" exist?
    var quote = document.getElementById("quote").textContent;//Random quote API area
    var text = document.getElementById("addText").textContent;//manually entered text
    ctx.drawImage(img,10,10);
    ctx.font = "30px Arial";
    ctx.strokeText(quote,100,100);
    ctx.strokeText(text,100,100);
}
