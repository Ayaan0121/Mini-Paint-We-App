var mouseEvent="empty";
var lastX;
var lastY;

canvas = document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
colour="black";
widthline=1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    colour=document.getElementById("color").value;
    widthline=document.getElementById("widthOfLine").value;
mouseEvent="mousedown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
  currentX=e.clientX-canvas.offsetLeft;
  currentY=e.clientY-canvas.offsetTop;
   
  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=widthline;

    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
  }

lastX=currentX;
lastY=currentY;

    }







    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e){
    mouseEvent="mouseup";

    
    }




canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouseEvent="mouseleave";

}


function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}