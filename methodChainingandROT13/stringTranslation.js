/*
Instead of using the String method replace for all of the letters in the ROT13 cipher,
we're going to use the method chain written in stringReversal.js for the reverse function.
However, instead of reversing the array, we're going to map it according to the following mapping rule:
*/
function mapping(character) {
  if (character >= 'A' && character <= 'z') {
    return 'x';
  }
  else return character;
}
// We're going to specify the actual ROT13 mapping function later.
// For now, it will just map any letter to 'x'
// Write a function named substitute that uses the rules defined by mapping:
function substitute(string) {
  return string.split('').map(mapping).join('');
}
console.log(substitute("Make me unreadable"));
