// functional programming
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;//retrun statement means that console does not return "undefined"
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);
// the purpose of functional programming is to separate data from the functions. return values in functions can be called by other functions (just like in java)

function objectMaker(val) {
    return {
        prop:val//returns an object
    }
}

function doubleIt(num) {
    return num * 2;//returns twice the input number
}
// now if I call these functions and use one inside the other:
objectMaker(20);//returns {prop: 20}
doubleIt(10).toString();//returns "20"
console.log(objectMaker(doubleIt(100)));//doubleIt makes 200, objectMaker sets 200 to property "prop"

// Functions and recursion. Recursion can lead to infinite loops:
function example() {
    console.log(1);
    console.log(2);
    console.log(3);
    example();
}
console.log(example());//infinite loop did not manifest
/* Most important principles in FP:
--> First-class functions
--> Higher-order function
--> Pure functions and side-effects 

First-class -----> a value that can be passed to other funx, saved in var, return from other funx: 
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

-->This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.

Higher-order -----> function that has either one or both of the following characteristics:

->It accepts other functions as arguments
->It returns functions when invoked

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

Pure functions and side-effects -----> returns the exact same result as long as it's given the same values. Should not have side-effects; any instance where a funx makes a change outside of itself, e.g.,
->changing variable values outside of the function itself, or even relying on outside variables 
->calling a Browser API (even the console itself!) 
->calling Math.random() - since the value cannot be reliably repeated

*/
