/**
 * tiny DSL designed to reduce noise when creating handheld tokens for unit
 * test of interpreters
 */

import { ArithmeticToken } from "../lexer.arithmetic";
import { NumberToken, NumericUnits, StringToken } from "../lexer.literals";
import { ParenthesisToken } from "../lexer.parenthesis";
import { ReferenceToken } from "../lexer.reference";

export function number(value: number, unit?: NumericUnits): NumberToken {
  return {
    type: "number",
    value,
    unit,
  };
}

export function string(value: string): StringToken {
  return {
    type: "string",
    value,
  };
}

export function reference(path: string): ReferenceToken {
  return {
    type: "reference",
    path,
  };
}

export function plus(): ArithmeticToken {
  return {
    type: "plus",
  };
}

export function minus(): ArithmeticToken {
  return {
    type: "minus",
  };
}

export function multiply(): ArithmeticToken {
  return {
    type: "multiply",
  };
}

export function divide(): ArithmeticToken {
  return {
    type: "divide",
  };
}

export function parenthesisLeft(): ParenthesisToken {
  return {
    type: "parenthesis_left",
  };
}

export function parenthesisRight(): ParenthesisToken {
  return {
    type: "parenthesis_right",
  };
}
