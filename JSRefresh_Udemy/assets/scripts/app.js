import { apikey } from "./util.js";

// functions can be defined clasically -->

function greetUser(username, message) {
    return "Hello " + username + ", " + message;
}

// or can be defined as arrow functions which are more common in React code: () => these are usually anonymous funx

// export default () => {

// }

// then fill in the blanks with what you want

export default (username, message) => {
console.log("Hello");
return username + message;
}

function transformToObjects(numberArray) {
    const newObject = numberArray.map((sue) => ({val: sue}));
    console.log(newObject);
}

transformToObjects([10, 15, 20]);

