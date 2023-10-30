/*7 basic data types in Js: string, number, Boolean, null, undefined, BigInt and symbol
--> exponents are calculated with "**" 
--> 100 == "100" gives TRUE (compare integer value only)
--> 100 === "100" gives FALSE (compare int value and data type)

*/
var score = 8;
console.log("Mid-level skills: " + (score > 0 && score < 10));
// console.log(score > 0 && score < 10)
var timeRemaining = 0;
var energy = 10;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, " an even number? ", result1);
console.log("Is ", num2, " an even number? ", result2);
var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d);
console.log();
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
console.log();
console.log("Great " + 5);
var i = 7;
 i += 1;
 i += 2;
 console.log(i);