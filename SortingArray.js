/**
 * 
 */
 const arr = [5, 2, 9, 1, 5, 6];

arr.sort(function(a, b) {
  return a - b; // Compare in ascending order
});

arr.reverse(); // Reverse the sorted array

console.log(arr);