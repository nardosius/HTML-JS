/* Bugs allow program to continue running, nut the code behaves unexpectedly. An error shuts the program down. 4 main types of errors: 1) Syntax, Type, Reference and Range. With try-catch a "throw" statement can be used but error will only be caught in catch if "throw" included in "try" block, e.g.,

try {
    throw new Error();
    
    catch(err) {
        console.log(err)
        
    }
    */
//    try {
//     console.log(a+b);
//    } catch(err) {
//     console.log(err);
//     console.log("There was an error");
//     console.log("The error was saved in the error log");
//    }
//    console.log("The program does not stop");

//    try {
//     throw new ReferenceError();//ReferenceError explicitly coded to be produced
//    } catch(err) {
//     console.log(err);
//     console.log("There was a Reference Error");
//    }
//    console.log("The program does not stop");

   /* Other types of errors: Error, Aggregate, Internal, URI 
   --> Reference - try to use vars that are not declared
   --> Syntax - invalid code (cannot be caught with try-catch)
   --> Type - trying to run ops on unsupported data type, e.g., mathematical addition of strings, objects
   --> Range - try to get values out of Js range, e.g., arrays and base number system conversion.
   Undefined, null and empty values: 
   --> null - intentional absence of any object value
   --> undefined - no return value of funx or no type declaration of var
   --> empty - data type exists, but value not found e.g. empty string*/

   function addTwoNumbers(a, b) {
    try {
    if (typeof(a) != 'number') {
        throw new ReferenceError("the first argument is not a number")
    } else if (typeof(b) != 'number') {
        throw new ReferenceError("the second argument is not a number")
    } else {
        console.log(a+b)
    }
} catch(err) {
    console.log(err);
}
   }
   console.log(addTwoNumbers("5", 5));
   console.log("It still works");