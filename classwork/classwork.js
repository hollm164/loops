/*
  Classwork
*/

var cellSize = 50;


function setup(){
  createCanvas(windowWidth,windowHeight);

  for(var row = 0; row <20;row++){

    for(var column =0; column <20;column++){

      fill(0,0,row*25);

      var xPos =  column*cellSize;
      var yPos = row*cellSize;

      rect(cellSize*column, cellSize*row, cellSize, cellSize);

      stroke("white");
      line(xPos,yPos,xPos+25, yPos+25);
      line(xPos, yPos+cellSize, xPos+cellSize, yPos);
      line(xPos+25,yPos,xPos+25, yPos+25);
      line(xPos,yPos+25,xPos+25, yPos+25);

      fill("aliceblue");
      arc(xPos+25,yPos+25,cellSize, cellSize,0, HALF_PI);



    }
  }
}
