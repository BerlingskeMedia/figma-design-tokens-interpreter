import { ArithmeticToken } from "./lexer.arithmetic";
import { LiteralToken } from "./lexer.literals";
import { ParenthesisToken } from "./lexer.parenthesis";
import { ReferenceToken } from "./lexer.reference";

export type Token =
  | ArithmeticToken
  | LiteralToken
  | ParenthesisToken
  | ReferenceToken;

export type TokenInterpreter = (tokens: Token[]) =>
  | {
      remainingTokens: Token[];
      get: (values: Record<string, unknown>) => string | number;
    }
  | undefined;
