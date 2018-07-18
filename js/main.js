class Circle {
  constructor() {
    this.wid = window.innerWidth;
    this.hgt = window.innerHeight;
    this.x = random(0, this.wid);
    this.y = random(150, this.hgt-100);
    this.size = random(100, 300);

    //make random not include 0
    this.xMovement = random(-2, 2);
    this.yMovement = random(-2, 2);
  }

  displayAndMove() {
    noFill();
    strokeWeight(1.5);
    stroke(250);
    ellipse(this.x, this.y, this.size, this.size);
    this.x += this.xMovement;
    this.y += this.yMovement;

    if (this.x < 0 || this.x > this.wid-100) {
      this.xMovement *= -1;
    }

    if (this.y < 100|| this.y > this.hgt-100) {
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
  var canv = createCanvas(window.innerWidth, window.innerHeight);
  canv.parent("#sketch");

  for (var i = 0; i < 10; i++) {
    circ = new Circle();
    circArray.push(circ);
  }

}

function draw() {
  background(107, 98, 255);
  for (var i = 0; i < circArray.length; i++) {
    circArray[i].displayAndMove();
  }

  textFont(playfair);
  noStroke();
  fill(255);
  textSize(80);
  text("We're Launching!", window.innerWidth/2 - 50, window.innerHeight/2 - 120);
  textSize(23);
  textFont(openSans);
  textAlign(CENTER);
  text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", window.innerWidth/2 - 470, window.innerHeight/2 - 40, window.innerWidth/2 + 150, window.innerHeight/2 +10);

}
