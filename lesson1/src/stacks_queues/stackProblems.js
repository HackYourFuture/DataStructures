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
    let stack = new Stack();
    if(string.indexOf("(") > string.indexOf(")")) return false;
    if(string.lastIndexOf("(") > string.lastIndexOf(")")) return false;

    let openPharantesis = 0;
    let closePharantesis = 0;
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      // todo: do you'r magic ! 🙌
      if (char === "(") openPharantesis++ ;
      if (char === ")") closePharantesis++ ;
    }

    return openPharantesis==closePharantesis;
  }
}

module.exports = StackProblems;