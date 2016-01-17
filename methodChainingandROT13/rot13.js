/*
ROT Stands For Rotation
As with any programming task, there are countless ways to write a ROT13 encoder, even in one line.
But that solution, though short, is hard to understand, and it uses low-level techniques such as character codes.
We don’t want to know or care about character codes, but instead use the high-level methods we looked at in the previous sections.
Here’s the strategy:
Rotate the alphabet by 13
Make a replacement rule
Replace all characters
*/
// This is from stringRotation.js:
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
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Now use it:
console.log(alphabet.rotate(13));
console.log(alphabet.rotate(13).rotate(13));
console.log();

/*
For the character substitution, we're going to use a dictionary (known in JS as an associative array)
to represent the lookup table.
*/
// Make an array of characters (upper and lower case) from A-z:
var firstArray = (alphabet + alphabet.toLowerCase()).split('');
console.log(firstArray);
// Make an array of characters from N to m:
var secondArray = (alphabet.rotate(13) + alphabet.rotate(13).toLowerCase()).split('');
console.log(secondArray);
/*
// Initialize an empty dictionary:
var rot13_dict = {};

Now, make an associative array with the characters from firstArray as the keys and the characters from
secondArray as the values.

// iterative using a for loop
for (var i = 0; i < firstArray.length; i++) {
  rot13_dict[firstArray[i]] = secondArray[i];
}
console.log(rot13_dict);
console.log();
*/
// iterative using forEach
function arrToObj(keys, values) {
  var rot13_dict = {};
  keys.forEach(function (key, index) {
    rot13_dict[key] = values[index];
  });
  return rot13_dict;
}
console.log(arrToObj(firstArray, secondArray));
console.log();
