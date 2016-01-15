console.log("Function names\n=====================");
// When using the function statement ( when the line starts with "function"), you have to provide a name.
// In a function expression (when the keyword 'function' follows the = of an assignment), the name is optional.
// If you don't give it a name, the function remains anonymous.
// Examples
// named function, defined in a statement
function i_have_a_name() { return; }
console.log("i_have_a_name: '"+i_have_a_name.name+"'");
// named function, defined with a 'function' operator
var i_do_this = function and_i_also_have_a_name() { return; };
console.log("i_do_this: '"+i_do_this.name+"'");
// anonymous function
var anonymous = function /* no name */ () { return; };
console.log("anonymous: '"+anonymous.name+"'");
