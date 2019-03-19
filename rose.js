var d = 8;
var n = 5;
var sliderD;
var sliderN;

function setup() {
  createCanvas(400, 400);
  sliderD = createSlider(1, 20, 10, 1);
  sliderN = createSlider(1, 20, 10, 1);
  sliderD.input(draw);
  sliderN.input(draw);
}

var Flower = function(x, y){
    this.x = x;
    this.y = y;
};

Flower.prototype.grow = function(){

};


function draw() {
  d = sliderD.value();
  n = sliderN.value();
  var k = n / d;
  background(51);
  push();
  translate(width / 2, height / 2);
  
	beginShape();
  stroke(0);
  strokeWeight(1);
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = 200 * cos(k * a);
    var x = (r+15) * cos(a);
    var y = (r*1.2) * sin(a);
    vertex(x+sin(x^2), y);
		fill(random(0,255), random(0,255), random(0,255));
  }
  endShape(CLOSE);
	
	
	pop();
  noLoop();
}

function reduceDenominator(numerator, denominator) {
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}
