var bullet, thickness;
var wall, speed, weight;

function setup() {
  createCanvas(1600,800);
 wall= createSprite(1200, 400, thickness, height/2);
 wall.shapeColor= color(80,80,80,);
 bullet=createSpritep(200,200,30,30);
 thickness= random(22,83);
 speed= random(223,321);
 weight= random(30,52);
}

function draw() {
  background(255,255,255);
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){
wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  hasCollided();  
  drawSprites();
}
function hasCollided(aditya, sinha){
  bulletRightEdge=aditya.x+aditya.width;
  wallLeftEdge=sinha.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}