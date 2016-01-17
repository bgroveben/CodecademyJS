// Write a string rotation method.
// It should pass all the tests given below.
/*
Is shift positive or negative? var plusOrMinus
How far are we shifting (how many spaces positive or negative)? var howFar
What is the first slice (from slice to end of string)? var firstSlice
What is the second slice (from beginning of string to slice)? var secondSlice
*/
String.prototype.rotate = function(number) {
  var howFar = number % this.length;
  var plusOrMinus;
  if (howFar > 0) {
    plusOrMinus = this.length - howFar;
  } else {
    plusOrMinus = -howFar;
  }
  var firstSlice = this.substring(plusOrMinus, this.length);
  var secondSlice = this.substring(0, plusOrMinus);
  return firstSlice + secondSlice;
};

/*********** Tests for your method ***********/
// The comments tell you the expected results.
// The correctness test will run these tests, too, so even
// if you remove the lines below, you will still see error
// messages until your code passes all the tests.
console.log("ryEve".rotate(3));        // "Every"
// Zero rotation: no change
console.log("JavaScript".rotate(0));   // "JavaScript"
// Negative numbers: rotate the other way
console.log("mmerprogra".rotate(-4));  // "programmer"
// Rotate by length: no change
console.log("should".rotate(6));       // "should"
console.log("know".rotate( -4));       // "know"
// Larger than length: rotate by modulo
console.log("outab".rotate(22));       // "about"
// (actually the same as "outab".rotate(2); )
console.log("otypesprot".rotate(-36)); // "prototypes"
// (actually the same as "otypesprot".rotate(-6); )

/*
* Reference implementation (Course Author's own solution)
* for "Method Chaining and ROT13", Section 2, Exercise 5
* http://is.gd/olbv94
*
* The idea is really simple:
* 1. find the new cutting point (simulate "rotating")
* 2. return all the caracters to the right of the cutting point
*    followed by those to the left of it.
*
* Positive values count cut position from the right,
* negative values count them from the left.
*
* Example: " h e l l o ".rotate(2) // 2 steps from the right
*                 ^
*                 return "lo" + "hel"
*/
String.prototype.rotate = function(n) { // n is an integer
    n %= this.length; // too large numbers: modulo
    var cut = n < 0 ? -n : this.length - n; // cutting point
    return this.substr(cut) + this.substr(0,cut);
};
