import { units } from "@bm/clientside-css";

import { interpretReferenceToken } from "./interpreter.literal";
import { TokenInterpreter } from "./typings.interpreter";

/**
 * definitions of arithmetic grammar:
 *
 * arithmetic_expr = arithmetic_term ((PLUS | MINUS) arithmetic_term)*
 * arithmetic_term = arithmetic_factor ((MUL | DIV) arithmetic_factor)*
 * arithmetic_factor = literal | LPAREN arithmetic_expr RPAREN
 */

export const takeArithmeticExpression: TokenInterpreter = (tokens) => {
  const leftTerm = takeTerm(tokens);

  if (!leftTerm) {
    return undefined;
  }

  let getter = leftTerm.get;
  let remainingTokens = leftTerm.remainingTokens;

  outerLoop: while (remainingTokens[0]) {
    const operatorToken = remainingTokens[0];

    switch (operatorToken.type) {
      case "plus":
      case "minus": {
        const rightTerm = takeTerm(remainingTokens.slice(1));

        if (!rightTerm) {
          throw new Error(
            "takeArithmeticExpression(): right term not provided"
          );
        }

        const prevGetter = getter;

        getter = (values: Record<string, unknown>) =>
          operatorToken.type === "plus"
            ? `${prevGetter(values)} + ${rightTerm.get(values)}`
            : `${prevGetter(values)} - ${rightTerm.get(values)}`;

        remainingTokens = rightTerm.remainingTokens;
        break;
      }

      default:
        break outerLoop;
    }
  }

  // if a single literal was found, then bail out - this wasn't an arithmetic
  // expression but rather a literal
  if (remainingTokens.length === tokens.length - 1) {
    return undefined;
  }

  return { remainingTokens, get: (values) => `calc(${getter(values)})` };
};

const takeTerm: TokenInterpreter = (tokens) => {
  const leftFactor = takeFactor(tokens);

  if (!leftFactor) {
    return undefined;
  }

  let getter = leftFactor.get;
  let remainingTokens = leftFactor.remainingTokens;

  outerLoop: while (remainingTokens[0]) {
    const operatorToken = remainingTokens[0];

    switch (operatorToken.type) {
      case "multiply":
      case "divide": {
        const rightFactor = takeFactor(remainingTokens.slice(1));

        if (!rightFactor) {
          throw new Error(
            "takeArithmeticExpression(): right term not provided"
          );
        }

        const prevGetter = getter;

        getter = (values: Record<string, unknown>) =>
          operatorToken.type === "multiply"
            ? `${prevGetter(values)} * ${rightFactor.get(values)}`
            : `${prevGetter(values)} / ${rightFactor.get(values)}`;

        remainingTokens = rightFactor.remainingTokens;
        break;
      }

      default:
        break outerLoop;
    }
  }

  return { remainingTokens, get: getter };
};

const takeFactor: TokenInterpreter = (tokens) => {
  switch (tokens[0]?.type) {
    case "number": {
      const token = tokens[0];

      return {
        remainingTokens: tokens.slice(1),
        get: () => {
          switch (token.unit) {
            case "px":
              return units.px(token.value);

            default:
              return `${token.value}${token.unit ?? ""}`;
          }
        },
      };
    }

    case "reference": {
      return {
        remainingTokens: tokens.slice(1),
        get: interpretReferenceToken(tokens[0]),
      };
    }

    case "parenthesis_left": {
      const arithmeticExpr = takeArithmeticExpression(tokens.slice(1));

      if (!arithmeticExpr) {
        throw new Error("takeFactor(): unable to parse arithmetic expression");
      }

      if (arithmeticExpr.remainingTokens[0]?.type !== "parenthesis_right") {
        throw new Error("takeFactor(): parenthesis not closed correctly");
      }

      return {
        remainingTokens: arithmeticExpr.remainingTokens.slice(1),
        get: arithmeticExpr.get,
      };
    }
  }

  return;
};
