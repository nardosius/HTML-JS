// // Nested loops
// for (var i = 1; i <= 2; i++){
//     for(var j = 1; j <= 5; j++) {
//         console.log("Week " + i + " Day " + j);
//     }
// }

// //nested loops - one inside another
// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     for (var secondNum = 0; secondNum < 10; secondNum++) {
//         console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
//     }
// }

// //nested loops - one inside another 
// for (var i = 100; i > 10; i = i - 10) {
//     for (var j = 10; j > 4; j = j - 5) {
//         console.log(i + " divided by " + j + " equals " + i / j);
//     }
// }

// var cubes = 'ABCDEFG';
// // By using "cubes.length" you effectively turn the "cubes" string into an array
// for (var i = 0; i < cubes.length; i++) {
//     //styling console output using CSS with a %c format specifier
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

for (var i = 1; i <=10; i++){
    if (i == 1) {//need "==" to compare
        console.log("Gold medal")
    } else if ( i== 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    }
    else { console.log(i) }
}

for (var i = 1; i <=10; i++){
    switch(i) {
        case 1: console.log("Gold medal");
        break;
        case 2: console.log("Silver medal");
        break;
        case 3: console.log("Bronze medal");
        break;
        default: console.log(i);
    }
}