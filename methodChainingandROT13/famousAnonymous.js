/*
Anonymous functions are widely used in JavaScript code for several reasons.
One reason is that they allow for creating closures (more on that later).
Another, more obvious scenario is when we only care about the results of applying a function to some values
(for instance, in an array), but don't need to keep the function itself around.
We can get rid of a variable that holds a reference to a single-purpose function, and define that function in place.
The function doesn't have to be anonymous, but it's common practice to omit the name for the sake of brevity.
*/
// Instructions
/*
Run the following code and observe carefully.
Note that the two statements do exactly the same thing, but the latter uses a function defined in place
instead of one stored in a variable.
This is a bit shorter, but the first example might be easier to read, especially since we chose a descriptive name for the function.
*/
// Hint
/*
The built-in Array instance method sort takes a function f and uses it to compare any two values for sorting:
f(a,b) < 0: sort a before b
f(a,b) > 0: sort b before a
f(a,b) == 0: no change
This, since (b - a) will be negative whenever a > b, larger numbers will be sorted before the smaller ones.
*/
// Here we go with some code (Finally, Right?!)
// "Standard" approach: store reference to the function in a variable:
var descending = function(a, b) {
  return b - a; // 0 when equal, < 0 when b < a -- see Hint
};
console.log([7, 13, 24, 2, 30].sort(descending));

// Now simply define the function in place:
console.log(
  [7, 13, 24, 2, 30].sort(
    function(a, b) { return b - a; }
    // It's irrelevant whether this function has a name:
    // function descending(a,b) {return b-a;}
    // works just as well and is more descriptive
  )
);
