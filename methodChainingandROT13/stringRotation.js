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
