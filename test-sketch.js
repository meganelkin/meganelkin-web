//modified from p5* Star example https://p5js.org/examples/form-star.html

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(70,130,180);

 
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  fill(255,200,200);
  star(50, 50, 80, 100, 40);
  pop();

  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
