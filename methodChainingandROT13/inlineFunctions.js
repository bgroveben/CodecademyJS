// What's important about anonymous functions is not that they are nameless,
// but that they can be defined in place, or inline.

// The method Array.map takes the function that you give it and applies that function
// to each member of the array in turn, returning a new array with the results.
console.log([1,2,3].map(
  function(n) {return 3 * n; }
));

/*
Imagine you have an array of numbers and need to calculate the sum of the squares of the negative numbers.
First, this problem is solved using a for loop
*/
function sum_squares_negatives_loop(array) {
  var sum = 0;
  for (var i=0; i < array.length; i++) {
    if (array[i] < 0) { // filter: only negative numbers allowed
      sum += (array[i] * array[i]); // square the numbers and add them to sum
    }
  }
  return sum;
}
console.log(sum_squares_negatives_loop([1,-2,3,-4,5,-6]));

// Now do the same thing, but without a loop and using Array methods:
function my_sum_squares_neg(array) {
    return array
        .filter( // filter negative numbers:
            function(n) {
                return n < 0; // <-- true if and only if n is negative
            }
        )
              // at this point we have an array of negative numbers
        .map( // map each of these numbers to its square
            function(n) {
                return n * n; // <-- the square of n
            }
        )
                 // now, we have an array of squared numbers
        .reduce( // let’s add them all together!
            function(sum, next) { // each array element in turn is next
                return sum += next; // <-- add next (value) to sum
            }, 0 // set sum = 0 initially
        );
}
// test if your function does the same as the loop:
var numbers = [-23, 95, 0, -2, -47];
console.log(sum_squares_negatives_loop(numbers));
console.log(my_sum_squares_neg(numbers));
