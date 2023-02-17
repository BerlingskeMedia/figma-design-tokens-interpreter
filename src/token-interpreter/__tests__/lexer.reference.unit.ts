import { takeReferenceToken } from "../lexer.reference";

it("should accept data point paths", () => {
  expect(takeReferenceToken("{my.path}")).toEqual([
    "",
    { type: "reference", path: "my.path" },
  ]);
});

it("should accept dashes and numbers in data point paths", () => {
  expect(takeReferenceToken("{data.cta-1-link}")).toEqual([
    "",
    { type: "reference", path: "data.cta-1-link" },
  ]);
});

it("should reject paths starting or ending with dots", () => {
  expect(() => takeReferenceToken("{.path}")).toThrow(
    /a reference cannot start or end with a dot/
  );
  expect(() => takeReferenceToken("{path.}")).toThrow(
    /a reference cannot start or end with a dot/
  );
});

it("should ignore unclosed references", () => {
  expect(takeReferenceToken("{path")).toEqual(undefined);
});
