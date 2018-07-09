const calculator = require("./calculator");

it("returns an integer when it receives a string of one integer", () => {
  const input = "43";
  const expected = 43;

  const actual = calculator(input);

  expect(actual).toBe(expected);
});

it("returns 0 if the string is empty", () => {
  const input = "";
  const expected = 0;

  const actual = calculator(input);

  expect(actual).toBe(expected);
});

// it("returns the sum of two ints", () => {
//   // arrange
//   const input = "4,5";
//   const expected = 9;

//   // act
//   const actual = calculator(input);

//   expect(actual).toBe(expected);
// });

// MILES MAKE ARRANGE..... comments into a snippet
// also make base calculator into snippet
