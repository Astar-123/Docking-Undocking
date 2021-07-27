var issImg, spacebg, spaceCraft1img, spaceCraft2img, spaceCraft3img, spaceCraft4img;
var iss, spaceCraft;
var hasDocked=false;

function preload() {
  issImg=loadImage("iss.png");
  spacebg=loadImage("space.jpg");
  spaceCraft1img=loadImage("spaceCraft1.png");
  spaceCraft2img=loadImage("spaceCraft2.png");
  spaceCraft3img=loadImage("spaceCraft3.png");
  spaceCraft4img=loadImage("spaceCraft14.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);

  iss=createSprite(displayWidth/2, displayHeight/3);
  iss.addImage(issImg);
  iss.scale=0.25;

  spaceCraft=createSprite(displayWidth/2, displayHeight/2);
  spaceCraft.addImage(spaceCraft1img);
  spaceCraft.scale=0.15;
}

function draw() {
  background(spacebg);  

  if(!hasDocked) {
    spaceCraft.x= Math.round(rand(100,700));

    if(keyCode(LEFT_ARROW)) {
      spaceCraft.addImage(spaceCraft3img);
      spaceCraft.velocityX=spaceCraft.velocityX-3;
    }
    if(keyCode(RIGHT_ARROW)) {
      spaceCraft.addImage(spaceCraft4img);
      spaceCraft.velocityX=spaceCraft.velocityX+3;
    }
    if(keyCode(DOWN_ARROW)) {
      spaceCraft.addImage(spaceCraft2img);
    }
    if(keyCode(UP_ARROW)) {
      spaceCraft.velocityY= spaceCraft.velocityY-3;
    }
  }
  
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked=true;
    fill("white")
    textSize(25);
    text("Docking Was Successful", displaywidth/2, displayHeight-100);
  }
  drawSprites();
}