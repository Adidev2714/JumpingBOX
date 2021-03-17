var canvas;
var music;
var surf1;
var surf2;
var surf3;
var surf4;
var movingpad;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surf1 =  createSprite(80, 575, 200, 40);
surf1.shapeColor = "green";

surf2 = createSprite(290, 575, 200, 40);
surf2.shapeColor = "yellow";

surf3 = createSprite(500, 575, 200, 40);
surf3.shapeColor = "red";

surf4 = createSprite(710, 575, 200, 40);
surf4.shapeColor = "blue";


    //create box sprite and give velocity


movingpad = createSprite(random(20,750), 300, 40, 40);
movingpad.shapeColor = "white"
movingpad.velocityX = 5;
movingpad.velocityY = 9;
}

function draw() {
    background(rgb(169, 169, 169));
   // create edgeSprites
    edges = createEdgeSprites();

    movingpad.bounceOff(edges);
    
  
    
  if(surf4.isTouching(movingpad) && movingpad.bounceOff(surf4)){
    movingpad.shapeColor = "blue"
    music.play();
    }

    if(surf3.isTouching(movingpad) && movingpad.bounceOff(surf3)){
      movingpad.shapeColor = "red"
      music.stop();
      movingpad.velocityX = 0;
      movingpad.velocityY = 0;

      }

      if(surf2.isTouching(movingpad) && movingpad.bounceOff(surf2)){
        movingpad.shapeColor = "yellow"
        }

        if(surf1.isTouching(movingpad) && movingpad.bounceOff(surf1)){
          movingpad.shapeColor = "green"
          }
    drawSprites();
    //add condition to check if box touching surface and make it box

   
}
