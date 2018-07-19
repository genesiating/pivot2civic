class Circle {
  constructor() {
    //initial values: width, height, x positon, y position, diameter
    this.wid = window.innerWidth;
    this.hgt = window.innerHeight;
    this.x = random(0, this.wid);
    this.y = random(150, this.hgt-100);
    this.size = random(100, 300);

    //TODO: random doesn't include 0
    this.randX = random(-2, 2);
    this.randY = random(-2, 2);

    if (this.randX === 0) {
      this.randX += 0.5;
    } else if (this.randY === 0) {
      this.randY += 0.5;
    }
    this.xMovement = this.randX;
    this.yMovement = this.randY;
  }

  displayAndMove() {
    noFill();
    strokeWeight(0.5);
    stroke(250);
    ellipse(this.x, this.y, this.size, this.size);
    this.x += this.xMovement;
    this.y += this.yMovement;

    if (this.x < 0 || this.x > this.wid - 50) {
      this.xMovement *= -1;
    }

    if (this.y < 100|| this.y > this.hgt - 50) {
      this.yMovement *= -1;
    }
  }
}

var circ;
var circArray = [];
var playfair;
var openSans;

function preload() {
  playfair = loadFont("assets/playfair.otf");
  openSans = loadFont("assets/open-sans.ttf");

}

function setup() {
  var canv = createCanvas(window.innerWidth, window.innerHeight - 100);
  canv.parent("#sketch");

  for (var i = 0; i < 6; i++) {
    circ = new Circle();
    circArray.push(circ);
  }

  textAlign(CENTER);

}

function draw() {
  background(107, 98, 255);
  for (var i = 0; i < circArray.length; i++) {
    circArray[i].displayAndMove();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, 400);
}
