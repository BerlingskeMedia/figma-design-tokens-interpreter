import { takeArithmeticExpression } from "./interpreter.arithmetic";
import { takeLiteral } from "./interpreter.literal";
import { TokenInterpreter } from "./typings.interpreter";

/**
 * definitions of root expression grammar:
 *
 * expr = arithmetic_expr | literal
 */

export const takeExpression: TokenInterpreter = (tokens) => {
  return takeArithmeticExpression(tokens) ?? takeLiteral(tokens);
};
