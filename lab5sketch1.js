let catcherX; // horizontal
let speedX = 2; // speed
let speedY = 1; // speed
let catcherY = 0;  // vertical
function setup() {
  createCanvas(400, 400);
  catcherX = random(400); //randomizes x so it changes every time
}

function draw() {
  background(220);
  fill(0, 0, 255); // blue bear
  ellipse(catcherX, catcherY, 80, 80); // body
  ellipse(catcherX - 33, catcherY - 28, 20, 20); // left ear
  ellipse(catcherX + 33, catcherY - 28, 20, 20); // right ear
  catcherX += speedX; // adds speed to x variable
		catcherY += speedY; // to y variable
    if (catcherX > width || catcherX <= 0){ // condition that keeps bear in bounds
     speedX *= -1;
  }
      if (catcherY > height || catcherY <= 0){ // same for y variable
        speedY *= -1;
  }
}
