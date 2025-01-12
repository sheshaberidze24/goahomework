//? codewars solution 1
function isSortedAndHow(array) {
    var sortAscending = [...array].sort((a, b) => a - b); // ზრდადად დალაგებული
    var sortDescending = [...array].sort((a, b) => b - a); // კლებადად დალაგებული
  
    if (JSON.stringify(array) === JSON.stringify(sortAscending)) {
      return "yes, ascending";
    } else if (JSON.stringify(array) === JSON.stringify(sortDescending)) {
      return "yes, descending";
    } else {
      return "no";
    }
  }

//! codewars solution 2
function sort(arr, indices) {
    return indices.map((_, i) => arr[indices.indexOf(i)]);
  }
  
  console.log(sort(['x', 'y', 'z'], [1, 2, 0]));
  console.log(sort(['z', 'x', 'y'], [0, 2, 1]));