import { takeArithmeticToken } from "../lexer.arithmetic";

it("should accept plus", () => {
  expect(takeArithmeticToken("+2")).toEqual(["2", { type: "plus" }]);
});

it("should accept minus", () => {
  expect(takeArithmeticToken("-2")).toEqual(["2", { type: "minus" }]);
});

it("should accept multiply", () => {
  expect(takeArithmeticToken("*2")).toEqual(["2", { type: "multiply" }]);
});

it("should accept divide", () => {
  expect(takeArithmeticToken("/2")).toEqual(["2", { type: "divide" }]);
});

it("should ignore other characters", () => {
  expect(takeArithmeticToken("1/2")).toEqual(undefined);
});
