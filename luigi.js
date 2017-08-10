function setup(){
  console.log('called');
    createCanvas(1500,500);
    background(229, 227, 227);
    //var rekt = rect(250,250,30,20); 
    //ellipse(300,300,400,400);
}

function mouseDragged(){
  ellipse(mouseX, mouseY,random(50),random(50));
  rect(mouseX,mouseY,random(30),random(20));
  fill(random(200),random(200), random(200));
}
/*
var s = function( p ) {
p.setup = function (){
    p.createCanvas(500,500);
    background(90);
}
};
var xPos = 50;
var yPos = 50;
var x = 4;
var y = 10;


s.draw = function(){
    p.background(90);
    if(xPos < 25 || xPos > 475) x = -x;
    if(yPos < 25 || yPos > 475) y = -y;
    xPos += x;
    yPos += y;
    s.ellipse(xPos,yPos,20,20);
    s.fill(random(130,250),random(130,250,),random(130,250));
}

var myp5 = new p5(s);
*/