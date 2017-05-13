let StackProblems = require("../src/stacks_queues/stackProblems");

describe("StackProblems", function () {

  it("should mark balanced parenthesis strings as such", function () {
    expect(StackProblems.balancedParenthesis("(hello world)")).toBe(true);
    expect(StackProblems.balancedParenthesis("((hello) world)")).toBe(true);
    expect(StackProblems.balancedParenthesis("((h)e)llo ((world))")).toBe(true);
    expect(StackProblems.balancedParenthesis("((h)e)llo ((world))()(())")).toBe(true);
    expect(StackProblems.balancedParenthesis("((h(el(l)o ((w)orld)))()(())) string !")).toBe(true);
  });

  it("should mark a string with no parenthesis as balanced", function () {
    expect(StackProblems.balancedParenthesis("h[e]l{lo world")).toBe(true);
  });

  it("should mark an imbalanced string as such", function () {
    expect(StackProblems.balancedParenthesis("(hello world")).toBe(false);
    expect(StackProblems.balancedParenthesis("(he(llo world)")).toBe(false);
    expect(StackProblems.balancedParenthesis(")hello world")).toBe(false);
    expect(StackProblems.balancedParenthesis("(hello) world)")).toBe(false);
    expect(StackProblems.balancedParenthesis("(hel((lo) w(or)ld)")).toBe(false);
  });

  it ("should return correct postfix expression", function() {
    expect(StackProblems.infixToPostfix("a+b*c")).toBe("abc*+");
    expect(StackProblems.infixToPostfix("a+b/c*d")).toBe("abc/d*+");
    expect(StackProblems.infixToPostfix("a-b-c*d/e+f^g")).toBe("abcde/*fg^+--");
  });

  it ("should evaluate the given postfix expression", function() {
    expect(StackProblems.evaluatePostfix("abc*+")).toBe(37);
    expect(StackProblems.evaluatePostfix("abc/d*+")).toBe(9.5);
    expect(StackProblems.evaluatePostfix("abcde/*fg^+--")).toBe(89);
  });
});