let ArrayProblems = require("../src/arrays/arrayProblems");

describe("ArrayProblems", function () {

  describe("allEqualElements function", function () {

    it("should mark equal elements arrays as such", function () {
      expect(ArrayProblems.allEqualElements(["a", "a", "a"])).toBe(true, `Array ["a", "a", "a"] should be true but returned false`);
    });

    it("should be false on distinct array [\"a\", \"b\"]", function () {
      expect(ArrayProblems.allEqualElements(["a", "b"])).toBe(false, `Array ["a", "b"] should be false but returned true`);
    });

    it("should be false on distinct array [\"a\", \"a\", \"a\", \"a\", \"b\"]", function () {
      expect(ArrayProblems.allEqualElements(["a", "a", "a", "a", "b"])).toBe(false, `Array with just 1 different element should be false but returned true`);
    });

    it("should be true on a one element array", function () {
      expect(ArrayProblems.allEqualElements([1])).toBe(true);
    });

    it("should be true on an empty array", function () {
      expect(ArrayProblems.allEqualElements([])).toBe(true);
    });
  });

  describe("Max function", function () {
    it("(getMax) should return the proper maximum element in array [2, 4, 1, 8, 2]", function () {
      expect(ArrayProblems.getMax([2, 4, 1, 8, 2])).toBe(8);
    });

    it("(getMax2) should return the proper maximum element in array [-2, -4, -1, -8, -2]", function () {
      expect(ArrayProblems.getMax2([-2, -4, -1, -8, -2])).toBe(-1);
    });
  });

  describe("Left Rotation (rotateLeft)", function () {
    it("should correctly rotate array [2, 4, 1, 8, 2] 1 time", function () {
      expect(ArrayProblems.rotateLeft([2, 4, 1, 8, 2], 1)).toEqual([4, 1, 8, 2, 2]);
    });
    it("should correctly rotate array [2, 4, 1, 8, 2] 3 times", function () {
      expect(ArrayProblems.rotateLeft([2, 4, 1, 8, 2], 3)).toEqual([8, 2, 2, 4, 1]);
    });
  });
});
