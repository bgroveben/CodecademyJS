/*
Create the object phone with two public methods, dialNumber and addZero, each having one argument.
The addZero method attaches a "0" to the beginning of the number, then returns it.
The dialNumber method can use addZero to prepend a zero, then print "dialing", followed by the modified number, to the console.
Pass some phone number (as a string) to the phone's dialNumber method.
*/
var phone = {};
phone.addZero = function (number) {
  this.number = "0" + number;
  return this.number;
};
phone.dialNumber = function (number) {
  console.log("dialing " + phone.addZero(number));
};
phone.dialNumber(12345);
