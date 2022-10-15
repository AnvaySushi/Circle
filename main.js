canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
Color = "blue";
Width_of_Line = 1;
Radius = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    Color = document.getElementById("Color").value;
    Width_of_Line = document.getElementById("Width_of_Line").value;  
    Radius = document.getElementById("Radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width_of_Line;
        ctx.Radius = Radius; 
        ctx.arc(current_position_of_x, current_position_of_y, 40, 0, 2 * Math.PI);   
        
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}