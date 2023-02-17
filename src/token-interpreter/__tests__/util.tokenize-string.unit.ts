import { tokenizeString } from "../util.tokenize-string";

it("should correctly parse all supported tokens", () => {
  expect(tokenizeString("4 (* / + -) {reference.path} string value")).toEqual([
    {
      type: "number",
      value: 4,
      unit: undefined,
    },
    {
      type: "parenthesis_left",
    },
    {
      type: "multiply",
    },
    {
      type: "divide",
    },
    {
      type: "plus",
    },
    {
      type: "minus",
    },
    {
      type: "parenthesis_right",
    },
    {
      type: "reference",
      path: "reference.path",
    },
    {
      type: "string",
      value: "string value",
    },
  ]);
});
