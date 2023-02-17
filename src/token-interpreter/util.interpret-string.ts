import { takeExpression } from "./interpreter.expression";
import { tokenizeString } from "./util.tokenize-string";

export function interpretString(
  input: string,
  values: Record<string, unknown>
): string {
  let remainingTokens = tokenizeString(input);
  let result = "";

  do {
    const compiledExpr = takeExpression(remainingTokens);

    if (!compiledExpr) {
      throw new Error(
        `interpretString(): unable to parse expression (${input})`
      );
    }

    remainingTokens = compiledExpr.remainingTokens;
    result += compiledExpr.get(values) + " ";
  } while (remainingTokens.length > 0);

  return result.trimEnd();
}
