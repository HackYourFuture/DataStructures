let ArrayProblems = require("../src/arrays/arrayProblems");

describe("ArrayProblems", function () {

  describe("Unique elements function", function () {

    it("should mark unique arrays as such", function () {
      expect(ArrayProblems.allUniqueElements(["a", "a", "a"])).toBe(true);
    });

    it("should be false on distinct array", function () {
      expect(ArrayProblems.allUniqueElements(["a", "b"])).toBe(false);
      expect(ArrayProblems.allUniqueElements(["a", "a", "a", "a", "b"])).toBe(false);
    });

    it("should be true on a one element array", function () {
      expect(ArrayProblems.allUniqueElements([1])).toBe(true);
    });

    it("should be true on an empty array", function () {
      expect(ArrayProblems.allUniqueElements([])).toBe(true);
    });
  });

  describe("Max function", function () {
    it("should return 8 as max", function () {
      expect(ArrayProblems.getMax([2,4,1,8,2])).toBe(8);
      expect(ArrayProblems.getMax2([-2,-4,-1,-8,-2])).toBe(-1);
    });
  });
});
