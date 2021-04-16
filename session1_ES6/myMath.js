const sum = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const divideBy = (a, b) => {
  return a / b;
};

export { sum, sub, divideBy, multi };

export default {
  sum: sum,
  sub: sub,
  divideBy: divideBy,
  multi: multi,
};
