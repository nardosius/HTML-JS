/* String Cheat sheet --> most common commands to use on strings:
--length()
--charAt()
--concat()
--indexOf()
--lastIndexOf()
--split()
--toUpperCase()
--toLowerCase() */

var clothes = [];
clothes.push("shirt");
clothes.push("pants");
clothes.push("jacket");
clothes.push("shoes");
clothes.push("belt");
console.log(clothes[3]);

var favCar = {};
favCar.color = "Black";
favCar.convertible = true;
console.log(favCar);
/* You can set an object property(key-value pair) to be a function: */
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}//a function which is set to a property is a method(property that can be executed)
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
// more methods:
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
/* It's important to remember that when the JavaScript engine runs this line of code, it locates the car object in its memory. Then, it finds the lightsOn method on the car object. It reads the function declaration that's saved on this property and runs it, line by line.

The type of operator accepts and evaluates a parameter and returns the name of the data type represented as a string. 
 */
console.log();
var test = typeof(true);
console.log(test);//will output "boolean", if array will output "object", etc.