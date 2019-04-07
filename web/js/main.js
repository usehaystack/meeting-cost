// Here's where the magic happens
var seconds = 0;

function formatAsDollars(number) {
  number = "$ " + number.toFixed(2);
  return number;
};

function updateCost() {
  var hourlyCost = document.getElementById('hourlyCost').value;
  var numPeople = document.getElementById('numberPeople').value;
  var cost = (hourlyCost / 3600) * numPeople * seconds;
  document.getElementById('score').innerHTML = formatAsDollars(cost);
  seconds++
}

window.setInterval(updateCost, 1000);