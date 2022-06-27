//code idea fromm
//https://www.youtube.com/watch?v=-3HwUKsovBE
let seed = 1234;


const grassColor = "#498428";
const skyColor = "#91C5F2";
let roadcolor = '#292929';
let roadcolor2 = '#858585';
const sunColor = [254,254,254,80];


function setup() { 
  createCanvas(800, 800);
  angleMode(DEGREES)
  createButton("reroll").mousePressed(() => seed++);
  //noLoop()

} 

function draw() { 
  randomSeed(seed);

  background(100);
  
  noStroke();

  fill(skyColor);
  rect(0, 0, width, 500);
  
  fill(grassColor);
  rect(0, 500, width, height / 2);

  fill(roadcolor);
  quad(350, 500, 450, 500, 700, 800, 100, 800);

  fill(roadcolor2);
  quad(390, 505, 410, 505, 420, 580, 380, 580);

  fill(roadcolor2);
  quad(380, 610, 420, 610, 440, 780, 360, 780);
  
  fill(...sunColor);
  ellipse(mouseX,0,30,30);
  ellipse(mouseX,0,50,50);
  ellipse(mouseX,0,100,100);
  ellipse(mouseX,0,200,200);

  translate(100, 650)
  branch(100)

  translate(600,0)
  branch(100)

  translate(-500,-100)
  branch(70)

  translate(400,0)
  branch(70)

  translate(-340, -40)
  branch(50)

  translate(260, 0)
  branch(50)
  
}

function branch(len)
{
  push()
  if(len > 19)
    {
      strokeWeight(map(len, 4, 130, 1, 16))
      stroke(70,40,20)
      line(0,0,0,-len)
      translate(0,-len)
      rotate(random(-20,-30))
      branch(len *random(0.7,0.9))
      rotate(random(50,60))
      branch(len *random(0.7,0.9))
      
      
    }
  else
    {
      var r = 220 + random(-20,20)
      var g = 120 + random(-20,20)
      var b = 170 + random(-20,20)
      fill(r,g,b,150)
      noStroke()
      
      ellipse(0,0,10)
      
      beginShape()
      for(var i =45; i <135; i++)
        {
          var rad = 15
          var x = rad * cos(i)
          var y = rad * sin(i)
          vertex(x,y)
        }
      for(var i =135; i>40; i--)
        {
          var rad = 15
          var x = rad * cos(i)
          var y = rad * sin(-i)+20
          vertex(x,y)
        }
      endShape(CLOSE)
    }
  pop()
}
