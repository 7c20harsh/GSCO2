var car,wall;
var speed,weight;
var deformation = 0.5*weight*speed*speed/22509;


function setup(){
createCanvas(1600,400)

speed=random(55,90);
weight=random(400,1500);

car=createSprite(50,200,50,50);
car.velocityX=speed;
car.shapeColour=255;

wall=createSprite(800,200,50,height/2);
wall.shapeColour=255;



}


function draw(){
background(0);
if(car.isTouching(wall)){
    car.collide(wall)
    deformation = 0.5*weight*speed*speed/22500;
    if (deformation<100) {
    car.shapeColor = 'green'  
    }
    if (deformation<180 && deformation>100) {
      car.shapeColor = 'yellow'
    }
    if (deformation<100) {
    car.shapeColor = 'red'  
    }
    }


drawSprites();
}