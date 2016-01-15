/*
The function makeTags illustrates the concepts we'll be dealing with.
It chains a couple of built-in methods, and it has an anonymous function inside.
*/
function makeTags(str) {
  return str
         .split(' ')
         .map(
           function(s) {return '<' +s+ '>';}
         ).join('');
}
console.log(makeTags("p u li"));
