let Stack = require("./stack");

class StackProblems {

  /*
   A string with balanced parenthesis is one such as all closing
   parenthesis characters ')' match their respecting opening ones '('.
   Note: brackets and curly braces are IGNORED

   This method should return true if a given String (string)
   has balanced parenthesis.

   Eg1: "hello(world)" -> true
   Eg2: "hello(wo(rld))" -> true
   Eg3: "hello(wo(rld))(())()" -> true
   Eg4: "hello(wo))(" -> false
   Eg5: "hellow)orld" -> false
   Eg6: "hellow)orld(" -> false
   */
  static balancedParenthesis(string) {
    const openParenthesesStack = new Stack();
    for (let letter of string) {
      if (letter === '(') {
        openParenthesesStack.push(letter);
      } else if (letter === ')') {
        // if there is a closing parantheses for no previous opening one return false
        if (openParenthesesStack.isEmpty()) return false;
        // if the stack isn't empty pop one of the opening parantheeses
        openParenthesesStack.pop();
      }
    }
    return openParenthesesStack.isEmpty();
  }
}

module.exports = StackProblems;