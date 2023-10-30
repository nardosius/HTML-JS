var age = 10;
if (age >= 65) {
    console.log("You get income from your pension")//no semicolon at end
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary.")
} else if (age < 18) {
    console.log("you get an allowance.")
} else {
    console.log("The value of the age variable is not numerical")
}

//Switch statement
var day = "Sunday";
switch(day) {
    case "Monday":
        console.log("Jogging");
        break;
    case "Tuesday":
        console.log("Swimming.");
        break;
    case "Wednesday":
        console.log("Cycling.");
        break;
    case "Thursday":
        console.log("Weights.");
        break;
    case "Friday":
        console.log("Abs.");
        break;
    case "Saturday":
        console.log("Legs.");
        break;
    case "Sunday":
        console.log("Rest.");
        break;
    default: console.log("There is no such day.")
}
 

