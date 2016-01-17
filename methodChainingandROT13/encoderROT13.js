/*
Use the code from rot13.js that builds the dictionary to create a function named rot13_map.
The function should take one argument.
If the argument is a letter in the range A-Z, a-z return its ROT13 value according to the dictionary.
Otherwise, just return the argument (for cases like punctuation i.e the character '?' that are not in the dictionary).
*/
// Paste the rotate function here:
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
function rot13_map(arg) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var firstArray = (alphabet + alphabet.toLowerCase()).split('');
  var secondArray = (alphabet.rotate(13) + alphabet.rotate(13).toLowerCase()).split('');
  var rot13_dict = {};
  for (var i = 0; i < firstArray.length; i++) {
    rot13_dict[firstArray[i]] = secondArray[i];
  }
  return rot13_dict[arg] || arg;
}
function rot13(str){
  return str.split("").map(rot13_map).join("");
};
console.log(rot13("SERR PBQR PNZC"));
