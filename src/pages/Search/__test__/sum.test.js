const sum = require('./sum');

test("Somar dois numeros", () => {
  expect(sum(1, 2)).toBe(3);
});