/*
Prototype Pattern
This pattern is an object-based creational design pattern. In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.
This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classic object-oriented inheritance. Hence, it plays to JavaScript’s strength and has native support.
In this example, we have a car object that we use as the prototype to create another object myCar with JavaScript’s Object.create feature and define an extra property owner on the new object.
*/

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
    console.log('Rotate wheels - ' + this.numWheels);
  },
  stop: function() {
    // Apply brake pads
    console.log('Apply brake pads for ' + this.make);
  }
}

let testlaObj = new TeslaModelS();
testlaObj.go();
testlaObj.stop();