//work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.
const menuItems = [ {name: "Italian pasta", price: 9.55}, 
    {name: "Rice with veggies", price: 8.65},
    {name: "Chicken with potatoes", price: 15.55},
    {name: "Vegetarian pizza", price: 6.45} ];

const tax = 1.20;


// add tax function, adds tax based on true or false
function addTax(tOrF) {
    if (tOrF) {
        console.log("Prices with 20% tax:")
        for (var i=0; i < menuItems.length; i++) {
            console.log("Dish: " + menuItems[i].name + " Price (incl.tax): " + menuItems[i].price * tax);
    }
    
    } else if (!tOrF) {
        console.log("Prices without tax:")
        for (var i=0; i < menuItems.length; i++) {
            console.log("Dish: " + menuItems[i].name + " Price (incl.tax): " + menuItems[i].price);
    }
} else {
    console.log("You need to pass a boolean to the getPrices call!");
    return;
}
}
addTax(false);
console.log();
console.log();
addTax(true);
console.log();
// addTax(dog); throws exception - try/catch?
