const calculator = require("./calculator");

it("can handle an empty string", () => {
  const actual = calculator("");
  const expected = 0;
  expect(actual).toBe(expected);
});
