// // this is breaking the tests so far 

// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     // callback(items[index]);
//   }
// }

// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2);

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);



// this was the one I tried no idea why the one above (given by the docs) fails 
const sum = jest.fn((a, b) => a + b)

test('mock sum tests', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum).toHaveBeenCalledWith(4, 5)
  expect(sum).toHaveBeenCalledTimes(1)
})