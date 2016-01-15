var date = "2013-03-16";
// split the date by "-"
var date_as_array = date.split("-");
// reverse the order of elements in the array
var reversed_array = date_as_array.reverse();
// convert the reversed array back to a string using the join() method with "/" as a separator
var converted_date = reversed_array.join("/");
console.log(date);
console.log(date_as_array);
console.log(reversed_array);
console.log(converted_date);
console.log();


/*
Now, let's chain the methods.
Get rid of the two "men in the middle" -- date_as_array and reversed_array.
Do the whole calculation in one line, using only the variables date and converted_date.
*/
var date = "2013-03-16";
var converted_date = date.split("-").reverse().join("/");
console.log(converted_date);
console.log();


// Change this function so as to reverse strings.
// When given argument "Hello", it should return "olleH".
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("right to left"));
console.log(reverse("Hello"));
console.log();


/*
Modify the reverse function to be a String instance method.
You will need to add the method to String's prototype.
Note that the method should have no argument variable; it should operate on the string that calls it.
*/
String.prototype.reverse = function () {
  return str.split("").reverse().join("");
}
console.log(reverse("right to left"));
console.log(reverse("Hello"));
console.log();
