function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("gif-image");
    var text = document.getElementById("quote").textContent;
    ctx.drawImage(img,10,10);
    ctx.font = "30px Arial";
    ctx.strokeText(text,100,100);
  }