

function calculateFitness()
{
  for(var i=0;i<POPULATION_SIZE;i++)
  {
      population[i] = shuffle(order);
      var dist = getDistance(cities,population[i]);
      fitness[i] = 1/(dist+1);
      if(minDistance > dist)
      {
        minDistance = dist;
        bestPath = population[i];
      }
  }
  return bestPath;
}


function normalizeFitness()
{
  var sum = 0;
  for(var i=0; i<fitness.length;i++)
  {
    sum+=fitness[i];
  }
  var total = 0;
  for(var i=0; i<fitness.length;i++)
  {
    fitness[i] = fitness[i]/sum;
  }
}

function pickOne(list,prob)
{
  var i = 0;
  var r = random(1);
  while(r > 0)
  {
    r = r - prob[i];
    i++;
  }
  i--;
  return list[i].slice();
}


function generateNext()
{
  var newPopulation = [];
  for(var i=0; i < population.length; i++)
  {
    var selectedOrder = pickOne(population,fitness);
    mutate(selectedOrder);
    newPopulation[i] = population;
  }

  population = newPopulation;

}

function mutate(a)
{
  var i = Math.floor(Math.random()*a.length);
  var j = Math.floor(Math.random()*a.length);
  swapArr(a,i,j);
}
