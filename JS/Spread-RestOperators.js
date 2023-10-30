/* Spread Operator --> method to copy the properties of an object onto a newly created object.

let top3 = ["The Colosseum, "Trevi Fountain", "Vatican City"];
function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}
showItinerary(top3[0], top3[1], top3[2]);//very verbose
If I need to extend the array, need to keep adding arguments.

Spread operator:
showItinerary(...top3);
showItinerary(...top7); ---> don't need to pass each array element. If only want to show acertain # of elements, need to write extra code. E.g. pass array into separate funx.

Rest Operator --> The spread operator in JavaScript, is used to unpack a box, for example, to unpack an array.The rest operator is used to build a smaller box, and pack items into it.
const top7 = ["The Colosseum", "Trevi Fountain", "Vatican City", "The Roman Forum", "The Pantheon", "Piazza Venezia", "The Palatine Hill"]

Destructure:
const[] = top7;
const [first, second, third, ...secondVisit] = top7;//notice assignment order
'first' = "The Colosseum", 'second' = "Trevi Fountain", 'third' = "Vatican City", ...secondVisit = remainder of top7 array

Rest operator in function --->
function addTaxToPrices(taxRate, ...itemsBought) {//rest operator must be second parameter
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);//[50.6, 97.9, 38.5, 86.9]

Examples:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4} can join objects

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);//['onion', 'parsley', 'carrot', 'beetroot'] push() not used

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car 2 = {...car1}//copy car1 into car2

car1.speed = 201//change car1 speed

console.log(car1.speed, car2.speed)//201, 200

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];//copy fruits1 into fruits2
fruits1.pop();//remove 'apples' from fruits1
console.log(fruits1, "not", fruits2);//['apples'] 'not' ['apples','pears']

spread operator only performs a shallow copy of the source array or object
*/


function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);


