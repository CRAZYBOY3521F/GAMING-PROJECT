
var car, wall;
var speed, height;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,60,100)


  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX = speed;



}

function draw() {
  background("black");
  
  if (wall.x-car.x <(car.widthwall.width)/2){
    car.velocityX=0;
    var (deformation>180) {
      car.shapeColour = "yellow";
    }
  }
  if (deformation<100)<
  car.shapeColour = "colour"
  
  drawSprites();
}