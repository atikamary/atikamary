console.log("hello")

fetch('https://restcountries.eu/rest/v1')
.then(getJsonResponse)
.then(chartData)


function getJsonResponse(response) {
  return response.json()
}

function chartData(data) {
  var countries = data.slice(0, 5).map(function(a) {return a.name;})
  var population = data.slice(0, 5).map(function(a) {return a.population;})

  //let's log the new arrays to see if it worked
  console.log (countries)
  console.log (population)
}
  
var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data);




