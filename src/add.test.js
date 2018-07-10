const add = require('./add.js');

it('should add 1 + 1 and equal 2', () => {
  expect(add(1, 1)).toBe(2);
});
