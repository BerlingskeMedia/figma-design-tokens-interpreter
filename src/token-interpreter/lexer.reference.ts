export type ReferenceToken = {
  type: "reference";
  path: string;
};

/**
 * tokenize references to external data points (e.g. {my.variable.path}) to
 * allow handling internal references between token values in the interpreter
 */
export function takeReferenceToken(
  input: string
): [string, ReferenceToken] | undefined {
  let cursor = -1;
  let currChar = input.charAt(++cursor);
  let result = "";

  if (currChar !== "{") {
    return;
  }

  currChar = input.charAt(++cursor);

  while (currChar !== "}" && cursor < input.length) {
    result += currChar;
    currChar = input.charAt(++cursor);
  }

  if (currChar !== "}" || result.length === 0) {
    return;
  }

  if (result.startsWith(".") || result.endsWith(".")) {
    throw new Error(
      `takeReferenceToken(): a reference cannot start or end with a dot (${input})`
    );
  }

  return [input.slice(cursor + 1), { type: "reference", path: result }];
}
