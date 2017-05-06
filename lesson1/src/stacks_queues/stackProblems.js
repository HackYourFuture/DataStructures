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
    for (let i = 0; i < string.length; i++) {
      let ch = string.charAt(i);
      if (ch == '(') {
        stack.push(ch);
      } else if (ch == ')') {
        let expect = stack.pop()
        if (expect != '(') {
            return false;
        }
      }
    }

    return stack.isEmpty();
  }

  /*
  Infix expression is the expression in which the operator appears in between the operands.
  E.g.
  o a+b (Operator '+' appears between a and b)
  o c*d (Operator '*' appears between c and d)

  Postfix expression is the expression in which operator appears after the operands.
  E.g.
  o ab+ (Operator '+' appears after a and b)
  o cd* (Operator '*' appears after c and d)

  This method should convert a given infix string to a postfix string. Ignore all characters that are not alphabets or operators.

  Example inputs:
  1. a+b*c => abc*+  (Note that b*c will be performed first and then a will be added)
  2. a+b/c*d => abc/d*+
  3. a-b-c*d/e+f^g => abcde/*fg^+--

  Operators in descending order (highest to lowest) of their priority are as follows:
  ^ : priority 5 ( 2^3 = 8, 4^2 = 16 )
  / : Priority 4 ( 4/2 = 2, 3/2 = 1 )
  * : Priority 3 ( 4*2 = 8, 3*2 = 6 )
  + : Priority 2 ( 4+2 = 6, 3+2 = 5 )
  - : Priority 1 ( 4-2 = 2, 3-2 = 1 )

  */
  static infixToPostfix(string) {
    let stack = new Stack();

    /* todo : Do your stuff here */
    return postfix;
  }

  /*
  This method evaluates a given postfix expression.

  Example inputs:
  1. abc*+  => 37 (5 + 4 * 8 = 5 + 32 = 37)
  2. abc/d*+ => 5 (5 + 4 / 8 * 9 = 5 + 0.5 * 9 = 5 + 4.5 = 9.5)
  3. abcde/*fg^+-- => 89 (5 - 4 - 8 * 9 / 3 + 2 ^ 6 = 5 - 4 - 8 * 9 / 3 + 64 = 5 - 4 - 8 * 3 + 64 = 5 - 4 - 24 + 64 = 5 - 4 - 88 = 5 - -84 = 89)
  */
  static evaluatePostfix(string) {
    let values = {'a' : 5, 'b' : 4, 'c' : 8, 'd' : 9, 'e' : 3, 'f' : 2, 'g' : 6, 'h' : 7, 'i' : 1, 'j' : 10}
    let stack = new Stack();
    let result = 0;
    /* todo : Do your stuff here */

    return stack.pop();
  }
}

module.exports = StackProblems;
