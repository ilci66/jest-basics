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
// can be inside or outside of the text 
// const sum = jest.fn((a, b) => a + b)

test('mock sum tests', () => {
  const sum = jest.fn((a, b) => a + b)

  expect(sum(4, 5)).toBe(9);
  expect(sum).toHaveBeenCalledWith(4, 5)
  expect(sum).toHaveBeenCalledTimes(1)
})

// const myMock = jest.fn();

// const a = new myMock();
// const b = {};
// const bound = myMock.bind(b);
// bound();

// console.log(myMock.mock.instances);

test("mock implementation", () => {
  const mock = jest.fn(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation one time", () => {
  const mock = jest.fn().mockImplementationOnce(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");

  // after that one test it becomes undefined
  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");
});

// setting a spesific return value 
test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

// setting a spesific resolved value 
test("mock promise resolution", () => {
  const mock = jest.fn();
  mock.mockResolvedValue("bar");

  expect(mock("foo")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

// ===================================

const doAdd = (a, b, callback) => {
  callback(a + b);
};

test("calls callback with arguments added", () => {
  const mockCallback = jest.fn();
  doAdd(1, 2, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(3);
});