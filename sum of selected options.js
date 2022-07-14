// create a function that calculates the number of selected options in a select element
function getSelectedOptions(select) {
  var options = select.options;
  var count = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      count++;
    }
  }
  return count;
}