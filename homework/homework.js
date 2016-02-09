/*
  100 things
*/

function setup(){
  createCanvas(600,600);

  for(var i=0; i<100; i=i++){

    var xPos = random(50,100);
    var yPos = random(50,100);

    var randomGreen = random(255);
    var randomBlue = random(255);

    stroke(0, random(255),random(255));
    strokeWeight(10);
    line(xPos,yPos,xPos+i,yPos+i);


    }
}
