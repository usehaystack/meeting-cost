// Here's where the magic happens
var seconds = 0;

function formatCurrency(number) {

  // Use toLocaleString if supported
  if (toLocaleStringSupportsOptions()) {
    return number.toLocaleString(undefined, { style: 'currency', currency: document.getElementById('currency').value})
  } else {
    return number.toFixed(2);
  }

};

// Check for support
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}

function updateCost() {
  var hourlyCost = document.getElementById('hourlyCost').value;
  var numPeople = document.getElementById('numberPeople').value;
  var cost = (hourlyCost / 3600) * numPeople * seconds;
  document.getElementById('score').innerHTML = formatCurrency(cost);
  seconds++
}

window.setInterval(updateCost, 1000);