export type ArithmeticToken =
  | {
      type: "plus";
    }
  | {
      type: "minus";
    }
  | {
      type: "multiply";
    }
  | {
      type: "divide";
    };

export function takeArithmeticToken(
  input: string
): [string, ArithmeticToken] | undefined {
  return (
    takePlus(input) ??
    takeMinus(input) ??
    takeMultiply(input) ??
    takeDivide(input)
  );
}

function takePlus(input: string): [string, ArithmeticToken] | undefined {
  if (input.charAt(0) === "+") {
    return [input.slice(1), { type: "plus" }];
  }
}

function takeMinus(input: string): [string, ArithmeticToken] | undefined {
  if (input.charAt(0) === "-") {
    return [input.slice(1), { type: "minus" }];
  }
}

function takeMultiply(input: string): [string, ArithmeticToken] | undefined {
  if (input.charAt(0) === "*") {
    return [input.slice(1), { type: "multiply" }];
  }
}

function takeDivide(input: string): [string, ArithmeticToken] | undefined {
  if (input.charAt(0) === "/") {
    return [input.slice(1), { type: "divide" }];
  }
}
