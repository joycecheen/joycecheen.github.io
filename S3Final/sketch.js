var drawThings = true;
var t = 0;
let img;

function setup() {
  createCanvas(500, 500);
  background(255,255,255);
  img = loadImage('circle.png');
  imageMode(CENTER);
  noFill();
}

function draw() {
  if (drawThings) {
    // noise returns the perlin noise value
    // each val is offset by a constant
    var x1 = mouseX * 4 * noise(t + 15);
    var x2 = width * noise(t + 25);
    var x3 = width * noise(t + 35);
    var x4 = mouseX * 2 * noise(t + 45);
    var y1 = mouseY * 2 * noise(t + 55);
    var y2 = height * noise(t + 65);
    var y3 = height * noise(t + 75);
    var y4 = mouseY * 4 * noise(t + 85);

    colorMode(HSB, 100);
    
    /*var XY = (mouseX + mouseY) / 2 / width;
    h = random(0, XY * 360);
    s = random(0, XY * 100);*/
    
    // hue, saturation, brightness
    h = random(0, 360);
    s = random(0,100);
    b = random(0, 20) + 80;
    a = random(0, 80);
    stroke(h, s, b, a);

    // (anchor point 1, control point 1, control point 2, anchor point 2) defines sloping curves
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    
    // incrementing step through noise field
    t += 0.005;

    push();
      translate(width / 2, height / 2);
      image(img,0,0,width,height);
    pop();

  }
  
}

function mouseClicked() {
  drawThings = !drawThings;
}