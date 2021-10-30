canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=25;
player_y=25;
var player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(175);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});

}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
    
    }
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
if(keypress=='65'){
left();
}
if(keypress=='87'){
up();
}
if(keypress=='68'){
right();
}
if(keypress=='83'){
down();
}
if(keypress=='66'){
new_image("wall.jpg");
}
if(keypress=='71'){
new_image("ground.png");
}
if(keypress=='76'){
new_image('light_green.png');
}
if(keypress=='84'){
new_image('trunk.jpg');
}
if(keypress=='82'){
new_image('roof.jpg');
}
if(keypress=='89'){
new_image('yellow_wall.png');
}


if(keypress=='85'){
new_image('unique.png');
}
if(keypress=='67'){
new_image('cloud.jpg');
}
if(keypress=='78'){
new_image('nglass.png');
}
if(keypress=='79'){
new_image('Oak-Planks-7.png')
}
if(keypress=='80' && e.shiftKey==true){
block_image_width+=10;
block_image_height+=10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(keypress=='77' && e.shiftKey==true){
    block_image_width-=10;
    block_image_height-=10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    }
}
function up(){
if (player_y >0){
player_y=player_y-block_image_height;
canvas.remove(player_object);
player_update();
}
}
function down(){
    if (player_y <600){
    player_y=player_y+block_image_height;
    canvas.remove(player_object);
    player_update();
    }
    }
    function left(){
        if (player_x >0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
        }
        }
        function right(){
            if (player_x <1300){
            player_x=player_x+block_image_width;
            canvas.remove(player_object);
            player_update();
            }
            }