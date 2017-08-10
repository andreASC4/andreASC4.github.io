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


p.draw = function(){
    p.background(90);
    if(xPos < 25 || xPos > 475) x = -x;
    if(yPos < 25 || yPos > 475) y = -y;
    xPos += x;
    yPos += y;
    p.ellipse(xPos,yPos,20,20);
    p.fill(random(130,250),random(130,250,),random(130,250));
}


var myp5 = new p5(s);