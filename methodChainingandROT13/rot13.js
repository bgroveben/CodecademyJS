/*
ROT Stands For Rotation
As with any programming task, there are countless ways to write a ROT13 encoder, even in one line.
But that solution, though short, is hard to understand, and it uses low-level techniques such as character codes.
We don’t want to know or care about character codes, but instead use the high-level methods we looked at in the previous sections.
Here’s the strategy:
Rotate the alphabet by 13
Make a replacement rule
Replace all characters
Let’s start with no. 1, shall we?
*/
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
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Now use it:
console.log(alphabet.rotate(13));
console.log(alphabet.rotate(13).rotate(13));
console.log();
