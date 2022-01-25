var canvas = new fabric.Canvas('myCanvas');
block_image_width  = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) 
    {
        player_object = Img;
        
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });

}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) 
    {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80');
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        }

        if(e.shiftkey && keyPressed == '77');
        {
            console.log("m and shift pressed together");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;
        }

        if(keyPressed == '38')
        {
             up();
             console.log("up");

        }

        if(keyPressed == '40')
        {
             down();
             console.log("down");

        }
        
        if(keyPressed == '37')
        {
             left();
             console.log("left");

        }

        if(keyPressed == '39')
        {
             up();
             console.log("right");

        }

        if(keyPressed == '87')
        {
             new_image('https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/power-rangers-super-megaforce/characters/red-ranger-about-web.jpg?quality=0.75&height=460&width=460&matte=true&crop=true');
             console.log("w");

        }

        if(keyPressed == '71')
        {
             new_image('https://cdnb.artstation.com/p/assets/images/images/018/990/913/large/dyana-wang-yellow-ranger-uplox.jpg?1561542886');
             console.log("g");

    
        }

        if(keyPressed == '76')
        {
             new_image('https://i.pinimg.com/originals/eb/43/e4/eb43e48d8bae962b4bdccf71aa6af7fa.jpg');
             console.log("l");

        }

        if(keyPressed == '84')
        {
             new_image('https://bbts1.azureedge.net/images/p/full/2020/12/81783ed4-4f7c-4de4-bc34-e0129618dcf5.jpg');
             console.log("t")

        }

        if(keyPressed == '82')
        {
             new_image('roof.jpg');
             console.log("r")

        }

        if(keyPressed == '89')
        {
             new_image('yellow_wall.jpg');
             console.log("y")

        }

        if(keyPressed == '68')
        {
             new_image('dark_green.png');
             console.log("d")

        }

        if(keyPressed == '85')
        {
             new_image('different.png');
             console.log("u")

        }

        if(keyPressed == '67')
        {
             new_image('cloud.jpg');
             console.log("c")

        }
}

