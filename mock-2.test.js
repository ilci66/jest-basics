// jest.mock('./math.js')
// using mock is essentially equal to this:
// export const add      = jest.fn();
// export const subtract = jest.fn();
// export const multiply = jest.fn();
// export const divide   = jest.fn();


import * as doMath from "./do_math";
import * as math from "./math";

// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
  doMath.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
})
// adding this here, my example
;test("this will also pass", () => {
  math.add(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  doMath.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});


// test("calls math.add", () => {
//   const addMock = jest.spyOn(math, "add");

//   // calls the original implementation
//   expect(doMath.doAdd(1, 2)).toEqual(3);

//   // and the spy stores the calls to add
//   expect(addMock).toHaveBeenCalledWith(1, 2);
// });