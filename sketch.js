var car;
var wall;

var speed, weight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  wall = createSprite(1300, 350, 60, height/2);
  wall.shapeColor = "grey";

  car = createSprite(150, 350, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  background("black");  

  if(wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation < 100) {
      car.shapeColor = "green";
      
      stroke("green");
      fill("green");
      textSize(40);
      text("Good", width/2, height/2);
    } 

    if(deformation > 180) {
      car.shapeColor = "red";

      stroke("red");
      fill("red");
      textSize(40);
      text("lethal", width/2, height/2);
    }

    if(deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    
      stroke("yellow");
      fill("yrllow");
      textSize(40);
      text("Average", width/2, height/2);
    }

  }
  drawSprites();
}