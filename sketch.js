var ball = {
  x: 20,
  y: 20,
  radius: 30,
  x_speed: 0,
  y_speed: 0,
  color: ["blue", "silver","red"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
circle(ball.x,ball.y,ball.radius);
fill(ball.color[1]);
ball.x_speed = 1
ball.x = ball.x +ball.x_speed
}