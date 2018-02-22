var cities = [];
var NUM_CITIES = 10;
var minDistance = 0;
var bestPath;

function setup() {
  createCanvas(400, 300);
  for (var i = 0; i < NUM_CITIES; i++){
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
  bestPath = cities.slice();
  minDistance = getDistance(cities);
}

function draw() {

  drawCities(cities);
  drawPath(cities,{r:255,g:0,b:0},2);
  var i = Math.floor(Math.random()*cities.length);
  var j = Math.floor(Math.random()*cities.length);
  swapArr(cities,i,j);

  //console.log(minDistance);
  var distance = getDistance(cities);

  if(distance < minDistance)
  {
    minDistance = distance;
    bestPath = cities.slice();
    console.log(minDistance);
  }
  drawPath(bestPath,{r:255,g:0,b:255},4);

}


function drawCities(a)
{
  background(0);
  fill(255);
  for(var i = 0; i < cities.length; i++){
    ellipse(a[i].x,a[i].y,5,5);
  }
}

// Drawing the path.
function drawPath(a,color,thickness)
{
  stroke(color.r,color.g,color.b);
  strokeWeight(thickness);
  noFill();
  beginShape();
  for(var i = 0; i < cities.length; i++){
    vertex(a[i].x,a[i].y);
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
function getDistance(a)
{
  var sum = 0;
  for(var i=0; i < a.length-1; i++)
  {
    var d = dist(a[i].x,a[i].y,a[i+1].x,a[i+1].y);
    sum+=d;
  }
  return sum;
}
