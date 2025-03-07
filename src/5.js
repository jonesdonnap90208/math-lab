const math = require('mathjs');

function getRandomNumber(min, max) {
  return math.randomInt(min, max);
}

function getRandomOperator() {
  const operators = ['+', '-', '*', '/'];
  const index = getRandomInt(0, operators.length - 1);
  return operators[index];
}

function getProblem() {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const problem = `${number1} ${operator} ${number2}`;
  return problem;
}

function getSolution() {
  const problem = getProblem();
  const solution = math.evaluate(problem);
  return solution;
}
