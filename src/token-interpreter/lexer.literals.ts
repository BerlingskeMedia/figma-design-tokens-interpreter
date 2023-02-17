import { takeReferenceToken } from "./lexer.reference";

export type NumericUnits =
  | "px"
  | "pt"
  | "%"
  | "rem"
  | "em"
  | "ex"
  | "vh"
  | "vw"
  | "vmin"
  | "vmax";

export type NumberToken = {
  type: "number";
  value: number;
  unit: NumericUnits | undefined;
};
export type StringToken = {
  type: "string";
  value: string;
};

export type LiteralToken = NumberToken | StringToken;

export function takeLiteralToken(
  input: string
): [string, LiteralToken] | undefined {
  return takeNumber(input) ?? takeString(input);
}

const unitRegex = /(px|pt|%|rem|em|ex|vh|vw|vmin|vmax)/i;

export function takeNumber(input: string): [string, LiteralToken] | undefined {
  let cursor = -1;
  let currChar = input.charAt(++cursor);

  if (!/\d/.test(currChar)) {
    return;
  }

  let result = "";
  let hasDecimalPoint = false;
  let hasDecimals = false;

  while (currChar) {
    if (currChar === "," || currChar === ".") {
      if (hasDecimalPoint) {
        throw new Error(
          `takeNumberToken(): a number can only contain a single decimal point (${input})`
        );
      }

      hasDecimalPoint = true;
      result += ".";
    } else if (/\d/.test(currChar)) {
      result += currChar;

      if (hasDecimalPoint) {
        hasDecimals = true;
      }
    } else {
      break;
    }

    currChar = input.charAt(++cursor);
  }

  if (hasDecimalPoint && !hasDecimals) {
    throw new Error(
      `takeNumberToken(): a number must contain decimals after the decimal point (${input})`
    );
  }

  const unit = input.slice(cursor).match(unitRegex)?.[0] ?? undefined;

  return [
    input.slice(cursor + (unit?.length ?? 0)),
    {
      type: "number",
      value: parseFloat(result),
      unit: unit as NumericUnits | undefined,
    },
  ];
}

function takeString(input: string): [string, LiteralToken] | undefined {
  let result = "";
  let cursor = -1;
  let currChar = input.charAt(++cursor);
  let prevChar = " ";

  while (
    cursor < input.length &&
    (prevChar !== " " ||
      (currChar !== "{" &&
        takeNumber(input.slice(cursor)) === undefined &&
        takeReferenceToken(input.slice(cursor)) === undefined))
  ) {
    result += currChar;
    prevChar = currChar;
    currChar = input.charAt(++cursor);
  }

  if (result.length === 0) {
    return undefined;
  }

  return [input.slice(cursor), { type: "string", value: result.trimEnd() }];
}
