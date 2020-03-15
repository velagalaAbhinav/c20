var fixedrect, movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 200, 50, 80);
  fixedrect.shapeColor = "green";

  movingrect = createSprite(400,200,50,80);
  movingrect.shapeColor = "green";
  movingrect.velocityX = 5;
  fixedrect.velocityX = -5;
}

function draw() {
  background(0,0,0);
  //movingrect.y = World.mouseY;
 // movingrect.x = World.mouseX;  
if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
  && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
  && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
  && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";
}
else {
movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
}
if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
  && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2){
  movingrect.velocityX = movingrect.velocityX * -1;
  fixedrect.velocityX = fixedrect.velocityX * -1;

  }
  drawSprites();
}