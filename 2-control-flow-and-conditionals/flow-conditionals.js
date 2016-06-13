/*
  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions

  "An expression is any valid unit of code that resolves to a value.

  Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluates and therefore resolves to value.

  The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.

  The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable."

  So far we have been working with expressions, now we are going to start working with block statements. 

  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block

  "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets."

  We are going to use the comparison operators and learn about control flow statements in the next section.

  The control flow is the order in which the computer executes statements. 
  https://developer.mozilla.org/en-US/docs/Glossary/Control_flow  

*/
// The first control flow statements we will use are 'if', 'else if', and 'else'. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// Those statements work like this.
/*
  You can have a block of code run if the condition you check is true by using the if statement.

  if (condition) {
    run this code if condition evaluates to true
  } 

  ------------------------------------------

  You can also have a block of code run if the condition is false by using the else statement.

  if (condition) {
    run this code if condition evaluates to true
  } else {
    run this code if condition is false
  }

  ------------------------------------------

  Finally, you can check multiple conditions, and have seperate blocks of code run if one of them is true.
  Check the first condition with the if statement, then as many other conditions as you like with the else if statement.
  Don't forget to use the else statement at the end whenever you use if/else if, so some code runs in the event that all conditions are false

  if (conditionA) {
    run this code if conditionA evaluates to true
  } else if (conditionB) {
    run this code if conditionB evaluates to true
  } else {
    run this code if all conditions are false
  }

*/
// Let see put that into action!
// The first couple of tests are passing as an example.









/*
  Ok, so now that we're getting pretty comfortable with conditionals, let's introduce a couple of new operators, 
  the logical operators.

  https://developer.mozilla.org/en-US/search?q=logical+operators 

  && - and operator
  || - or operator
  !  - not operator
*/



/*
  So did all of those nested if/else if/else statements get a bit hard to read? 
  Well there's another way to write long conditional statements to ease readability.

  Introducing, the switch statement.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  
  From MDN: "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

"

  Which means we also need to introduce the break statement.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

  From MDN: "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement."
*/




