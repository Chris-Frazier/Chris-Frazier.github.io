// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

console.log(data);

data.forEach((UFOSighting) => {
    const row = tbody.append("tr");
    for (key in UFOSighting){
        const cell = row.append("td");
        cell.text(UFOSighting[key]);
    }
});

const filter = d3.select('#filter-btn');

filter.on('click', function(){

    d3.event.preventDefault();
})