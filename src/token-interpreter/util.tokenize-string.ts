import { takeArithmeticToken } from "./lexer.arithmetic";
import { takeLiteralToken } from "./lexer.literals";
import { takeParenthesisToken } from "./lexer.parenthesis";
import { takeReferenceToken } from "./lexer.reference";
import { Token } from "./typings.interpreter";

export function tokenizeString(input: string): Token[] {
  let remaining = input.trimStart();
  const tokens: Token[] = [];

  while (remaining.length > 0) {
    const result = tokenize(remaining);

    if (!result) {
      throw new Error(
        `tokenizeString(): unable to take next token from input (${remaining})`
      );
    }

    remaining = result[0].trimStart();
    tokens.push(result[1]);
  }

  return tokens;
}

function tokenize(input: string): [string, Token] | undefined {
  return (
    takeArithmeticToken(input) ??
    takeParenthesisToken(input) ??
    takeLiteralToken(input) ??
    takeReferenceToken(input)
  );
}
