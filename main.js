
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img)
    {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:block_y,
    left:block_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '83') // add appropriate keycode
	{
		// upload red ranger
		new_image('power-rangers-title.png');
		block_image_object = "power-rangers-title.png";
		console.log("prtp");
	}
	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png');
		block_image_object = "rr1.png";
		console.log("r");
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png');
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log("y");

	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	    // upload blue ranger
	    new_image('br.png');
	    console.log("b");
	}
	if(keyPressed == '69')
	{
	    // upload blue ranger
	    new_image('prback.jpg');
		block_image_object = "prback.jpg";
	    console.log("pp");
	}	
}