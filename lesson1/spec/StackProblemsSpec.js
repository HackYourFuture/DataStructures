let StackProblems = require("../src/stacks_queues/stackProblems");

describe("StackProblems balancedParenthesis", function () {

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
});
