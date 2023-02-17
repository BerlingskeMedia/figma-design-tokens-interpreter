import { takeLiteralToken } from "../lexer.literals";

describe("takeNumber", () => {
  it("should accept single-digit and multi-digit numbers", () => {
    expect(takeLiteralToken("1")).toEqual(["", { type: "number", value: 1 }]);
    expect(takeLiteralToken("10")).toEqual(["", { type: "number", value: 10 }]);
  });

  it("should accept css units", () => {
    expect(takeLiteralToken("1%")).toEqual([
      "",
      { type: "number", value: 1, unit: "%" },
    ]);
    expect(takeLiteralToken("10px")).toEqual([
      "",
      { type: "number", value: 10, unit: "px" },
    ]);
  });

  it("should terminate when reaching non-digit characters", () => {
    expect(takeLiteralToken("10a")).toEqual([
      "a",
      { type: "number", value: 10 },
    ]);
  });

  it("should accept decimal points", () => {
    expect(takeLiteralToken("10.1")).toEqual([
      "",
      { type: "number", value: 10.1 },
    ]);

    expect(takeLiteralToken("10,1")).toEqual([
      "",
      { type: "number", value: 10.1 },
    ]);
  });

  it("should reject multiple decimal points in a single number", () => {
    expect(() => takeLiteralToken("10.1,1")).toThrow(
      /a number can only contain a single decimal point/
    );
  });

  it("should reject numbers ending with a decimal point", () => {
    expect(() => takeLiteralToken("10.")).toThrow(
      /a number must contain decimals after the decimal point/
    );
  });
});

describe("takeString", () => {
  it("should accept strings", () => {
    expect(takeLiteralToken("string")).toEqual([
      "",
      { type: "string", value: "string" },
    ]);
  });

  it("should break when reaching numbers or references", () => {
    expect(takeLiteralToken("string 2 * 3")).toEqual([
      "2 * 3",
      { type: "string", value: "string" },
    ]);

    expect(takeLiteralToken("string {reference}")).toEqual([
      "{reference}",
      { type: "string", value: "string" },
    ]);
  });
});
