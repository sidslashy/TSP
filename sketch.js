var cities = [];
var NUM_CITIES = 10;
var POPULATION_SIZE = 300;
var minDistance = Infinity;
var bestPath;

var population = [];
var fitness = [];


var order = [];


function setup() {
  createCanvas(400, 300);
  for (var i = 0; i < NUM_CITIES; i++){
    var v = createVector(random(width), random(height));
    cities[i] = v;
    order[i] = i;
  }
  bestPath = cities.slice();
  //minDistance = getDistance(cities);
}

function draw() {
  var bestOrder = calculateFitness();
  normalizeFitness();
  generateNext();

  drawCities(cities);
  drawPath(cities,bestOrder,{r:255,g:0,b:255},3);


  //noLoop();
  // drawPath(cities,{r:255,g:0,b:0},2);
  // var i = Math.floor(Math.random()*cities.length);
  // var j = Math.floor(Math.random()*cities.length);
  // swapArr(cities,i,j);

  //console.log(minDistance);



  //var distance = getDistance(cities);

  // if(distance < minDistance)
  // {
  //   minDistance = distance;
  //   bestPath = cities.slice();
  //   console.log(minDistance);
  // }
  // drawPath(bestPath,{r:255,g:0,b:255},4);

}


function drawCities(a)
{
  background(0);
  fill(255);
  for(var i = 0; i < a.length; i++){
    ellipse(a[i].x,a[i].y,5,5);
  }
}

// Drawing the path.
function drawPath(a,pointOrder,color,thickness)
{
  stroke(color.r,color.g,color.b);
  strokeWeight(thickness);
  noFill();
  beginShape();
  for(var i = 0; i < pointOrder.length; i++){
    vertex(a[pointOrder[i]].x,a[pointOrder[i]].y);
  }
  endShape();
}




// Swap citites
function swapArr(a,i,j)
{
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}



// Calculate distance
function getDistance(a,pointOrder)
{
  var sum = 0;
  for(var i=0; i < pointOrder.length-1; i++)
  {
    var ptA = a[pointOrder[i]];
    var ptB = a[pointOrder[i+1]];
    var d = dist(ptA.x,ptA.y,ptB.x,ptB.y);
    sum+=d;
  }
  return sum;
}
