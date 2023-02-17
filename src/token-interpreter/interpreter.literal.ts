import { units } from "@bm/clientside-css";

import { NumberToken, takeLiteralToken } from "./lexer.literals";
import { ReferenceToken } from "./lexer.reference";
import { TokenInterpreter } from "./typings.interpreter";
import { selectValueByPath } from "./util.select-value";

export const takeLiteral: TokenInterpreter = (tokens) => {
  const token = tokens[0];

  switch (token?.type) {
    case "number":
      return {
        remainingTokens: tokens.slice(1),
        get: interpretNumberToken(token),
      };

    case "string":
      return {
        remainingTokens: tokens.slice(1),
        get: () => token.value,
      };

    case "reference":
      return {
        remainingTokens: tokens.slice(1),
        get: interpretReferenceToken(token),
      };
  }
};

export function interpretNumberToken(token: NumberToken) {
  return () => {
    switch (token.unit) {
      case "px":
      case undefined:
        return units.px(token.value);

      default:
        return `${token.value}${token.unit}`;
    }
  };
}

export function interpretReferenceToken(token: ReferenceToken) {
  return (values: Record<string, unknown>) => {
    const value = String(selectValueByPath(`${token.path}.value`, values));
    const [remainingValue, literalToken] = takeLiteralToken(value) ?? [];

    if (!remainingValue && literalToken?.type === "number") {
      return interpretNumberToken(literalToken)();
    }

    return value;
  };
}
