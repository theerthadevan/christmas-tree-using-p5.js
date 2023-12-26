let snowflakes = [];
let lights=[];

function setup() {
  createCanvas(400, 400);
  // saveGif('ChristmasTree', 7);
  
}

function draw() {
  // background(147, 196, 245);
  // background(19,24,98);
  background(0);
  
  //to generate twinkling stars
  for (let i = 0; i < 3; i++) {
    drawStar(random(width), random(height), random(1, 3), random(100, 255));
  }
  
  //Grass on the ground
  fill(22, 82, 54);
  stroke(22, 82, 54);
  rect(0,350,400,50);
  
  //Tree trunk
  fill(107, 69, 4);
  stroke(107, 69, 4);
  rect(195,300,10,50);
  
  //creating the tree by making use of triangles of different size and fill
  fill(81,165,79);
  stroke(81,165,79);
  triangle(100,290,200,300,195,275);
  
  fill(158,200,111);
  stroke(158,200,111);
  triangle(200,300,300,290,195,275);
  
  fill(128, 196, 82);
  stroke(128, 196, 82);
  triangle(200,300,300,290,195,275);
  
  
  fill(195,219,116);
  stroke(195,219,116);
  triangle(195,275,300,290,270,260);
  
  
  fill(124,184,98);
  stroke(124,184,98);
  triangle(195,275,100,290,130,260);
  
  
  fill(60,141,68);
  stroke(60,141,68);
  triangle(195,275,270,260,130,260);
  
  fill(85,164,75);
  stroke(85,164,75);
  triangle(130,260,200,235,270,260);
  
  fill(66,152,75);
  stroke(66,152,75);
  triangle(130,260,110,240,200,235);
  
  fill(167,214,115);
  stroke(167,214,115);
  triangle(270,260,290,240,200,235);
  
  fill(167,214,115);
  stroke(167,214,115);
  triangle(270,260,290,240,200,235);
  
  fill(125,185,97);
  stroke(125,185,97);
  triangle(110,240,140,210,200,235);
  
  fill(195,219,116);
  stroke(195,219,116);
  triangle(290,240,260,210,200,235);
  
  
  fill(151,202,103);
  stroke(151,202,103);
  triangle(140,210,260,210,200,235);
  
  fill(66,152,75);
  stroke(66,152,75);
  triangle(120,200,260,210,140,210);
  
  
  fill(81,165,79);
  stroke(81,165,79);
  triangle(200,190,120,200,285,210);
  
  
  fill(124,184,98);
  stroke(124,184,98);
  triangle(120,200,150,180,200,190);
  
  fill(195,219,116);
  stroke(195,219,116);
  triangle(285,210,255,180,200,190);
  
  fill(151,202,103);
  stroke(151,202,103);
  triangle(150,180,200,190,255,180);
  
  
  fill(81,165,79);
  stroke(81,165,79);
  triangle(150,180,200,150,255,180);
  
  
  fill(66,152,75);
  stroke(66,152,75);
  triangle(130,160,200,150,150,180);
  
  
  fill(167,214,115);
  stroke(167,214,115);
  triangle(275,160,200,150,255,180);
  
  
  fill(122,182,96);
  stroke(122,182,96);
  triangle(130,160,195,105,200,150);
  
  
  fill(197,221,126);
  stroke(197,221,126);
  triangle(275,160,195,105,200,150);
  
  fill(255);
  stroke(255);
  triangle(170,120,195,95,220,120);
  
  drawLights();
  updateLights();
  
  
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].display();
  }

  // Create new snowflakes
  if (frameCount % 60 === 0) {
    snowflakes.push(new Snowflake());
  }
  
  
}

class Snowflake {
  constructor() {
    this.x = random(width);
    this.y = random(-10, -5);
    this.size = random(5, 15);
    this.speed = random(1, 4);
  }

  update() {
    this.y += this.speed;

    // Reset snowflake position if it goes off-screen
    if (this.y > height + this.size) {
      this.y = random(-10, -5);
      this.x = random(width);
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
function drawLights() {
  // Adding lights at every 10 frames
  if (frameCount % 10 === 0) {
    let x = random(140, 260);
    let y = random(105, 300);
    let r = random(5, 8);
    let lightColor = color(random(255), random(255), random(255));
    lights.push({ x, y, r, color: lightColor });
  }

  // Display lights
  for (let i = 0; i < lights.length; i++) {
    let light = lights[i];
    fill(light.color);
    noStroke();
    circle(light.x, light.y, light.r);
  }
}

function updateLights() {

  for (let i = 0; i < lights.length; i++) {
    lights[i].r -= 0.03; // Adjust the rate of fading
    if (lights[i].r < 0) {
      lights.splice(i, 1); // Remove lights that have faded completely
    }
  }
}

function drawStar(x, y, radius, alpha) {
  fill(255, 255, 255, alpha); // Set the fill color with varying opacity
  noStroke();

  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI / 5 * i;
    let sx = x + cos(angle) * radius;
    let sy = y + sin(angle) * radius;
    vertex(sx, sy);
    let angle2 = angle + TWO_PI / 10;
    let mx = x + cos(angle2) * (radius / 2);
    let my = y + sin(angle2) * (radius / 2);
    vertex(mx, my);
  }
  endShape(CLOSE);
}

