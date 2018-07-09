const calculator = input => {
  if (!input.includes(",")) {
    return Number(input);
  }

  const numArr = input.split(",");
  return Number(numArr[0]) + Number(numArr[1]);
};
module.exports = calculator;
