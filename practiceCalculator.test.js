const calculator = require("./calculator");

it("takes a single number string and returns a number", () => {
  const str = "42";
  const expected = 42;
  const actual = calculator(str);
  expect(actual).toBe(expected);

  const str2 = "43";
  const expected2 = 43;
  const actual2 = calculator(str2);
  expect(actual2).toBe(expected2);
});

it("returns zero when it receives an empty string", () => {
  // arrange
  const str = "";
  const expected = 0;

  //act
  const actual = calculator(str);

  // assert
  expect(actual).toBe(expected);
});

it("returns the sum of two comma-delimited numbers", () => {
  // arrange
  const str = "4,20";
  const expected = 24;

  //act
  const actual = calculator(str);

  // assert
  expect(actual).toBe(expected);
});
