const someFile = require('./some_file')

test('adds 1 + 2 to equal 3', () => {
  expect(someFile(1, 2)).toBe(3);
});