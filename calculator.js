const calculator = input => {
  const numArr = input.split(",");
  // const containsAlpha = \[a-zA-Z]+\.

  return numArr.length === 1
    ? Number(input)
    : Number(numArr[0]) + Number(numArr[1]);
};

module.exports = calculator;
