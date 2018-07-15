const calculator = require("./calculator");

it("returns an int from a string of one number", () => {
  const input = "43";
  const expected = 43;

  const actual = calculator(input);

  expect(actual).toBe(expected);
});

it("returns the sum of two ints from a string of two numbers", () => {
  const input = "4,5";
  const expected = 9;

  const actual = calculator(input);

  expect(actual).toBe(expected);
});

it("returns 0 on receipt of an empty string", () => {
  const input = "";
  const expected = 0;

  const actual = calculator(input);

  expect(actual).toBe(expected);
});

// requ
