var barWidth = 20;
var lastBar = -1;
var ellipseDiam = 10
function setup() {
  createCanvas(720, 400);
  colorMode(HSB, width, height, 100); 
  noStroke();
}

function draw(){

    fill("#e27415");
    ellipse(350,200, ellipseDiam)
    fill("#31bee8")
    ellipse(550,200, ellipseDiam)
    fill("#e03b55")
    ellipse(150,200, ellipseDiam)
    fill("#f21dea");
    textSize(50);
    textFont("Georgia");
    textStyle(NORMAL);
    textAlign(CENTER);
    text("P",250,40);
        fill("#de2121");
    textSize(50);
    textFont("Georgia");
    textStyle(NORMAL);
    textAlign(CENTER);
    text("R",300,40);
        fill("#86b9d4");
    textSize(50);
    textFont("Georgia");
    textStyle(NORMAL);
    textAlign(CENTER);
    text("I",350,40);
        fill("#e4f42f");
    textSize(50);
    textFont("Georgia");
    textStyle(NORMAL);
    textAlign(CENTER);
    text("D",400,40);
    fill("#48af58");
        textSize(50);
    textFont("Georgia");
    textStyle(NORMAL);
    textAlign(CENTER);
    text("E",450,40);


  var whichBar = mouseX / barWidth;
  if (whichBar != lastBar) {
    var barX = whichBar * barWidth;
    fill(barX, mouseY, 96);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
    function mousePressed(){
        ellipseDiam=ellipseDiam+10;
if (ellipseDiam > 140){
    ellipseDiam = 10;
}

}