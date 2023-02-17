import { takeParenthesisToken } from "../lexer.parenthesis";

it("should accept left parenthesis", () => {
  expect(takeParenthesisToken("(")).toEqual(["", { type: "parenthesis_left" }]);
});

it("should accept right parenthesis", () => {
  expect(takeParenthesisToken(")")).toEqual([
    "",
    { type: "parenthesis_right" },
  ]);
});

it("should ignore other characters", () => {
  expect(takeParenthesisToken("1/2")).toEqual(undefined);
});
