/* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy (value which equals or can be converted to true).)followed by a colon (:), and finally the expression to execute if the condition is falsy (value which can be converted to false). This operator is frequently used as an alternative to an if...else statement.

Syntax: condition ? exprIfTrue : exprIfFalse

*/
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"
  