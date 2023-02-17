export type ParenthesisToken =
  | {
      type: "parenthesis_left";
    }
  | {
      type: "parenthesis_right";
    };

export function takeParenthesisToken(
  input: string
): [string, ParenthesisToken] | undefined {
  return takeLeftParenthesis(input) ?? takeRightParenthesis(input);
}

function takeLeftParenthesis(
  input: string
): [string, ParenthesisToken] | undefined {
  if (input.charAt(0) === "(") {
    return [input.slice(1), { type: "parenthesis_left" }];
  }
}

function takeRightParenthesis(
  input: string
): [string, ParenthesisToken] | undefined {
  if (input.charAt(0) === ")") {
    return [input.slice(1), { type: "parenthesis_right" }];
  }
}
