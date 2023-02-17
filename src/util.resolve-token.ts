import tokens from "./__figma__/tokens.json";
import { interpretString } from "./token-interpreter";

/**
 * thin wrapper over the string interpreter implemented, simply auto-injecting
 * the relevant token values into the interpretation algorithm by default
 */
export function resolveToken(input: string): string {
  return interpretString(input, tokens.global);
}
