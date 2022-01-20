const someFile = require('./some_file')

test('adds 1 + 2 to equal 3', () => {
  expect(someFile(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  // using object.is()
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// just like in chai
test('null', () => {
  const n = null;

  expect(n).toBeNull();

  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();

  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;

  expect(z).not.toBeNull();

  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();

  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);

  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// floats are a bit weird
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // This won't work because of rounding error
  //expect(value).toBe(0.3);           
  expect(value).toBeCloseTo(0.3); // This works.
});

// strings
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


// arrays and iterables
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  // I don't yet know this "new Set()", when I commented the test still ran and passed
  expect(new Set(shoppingList)).toContain('milk');
});


// expectations
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// there are many other types of mathcers and I think I got how it works