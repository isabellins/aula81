var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var cor = "lightblue";

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    circle(mouseX,mouseY)
}

function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 5;
    ctx.arc(mouseX,mouseY,27,0,2*Math.PI);
    ctx.stroke()
}