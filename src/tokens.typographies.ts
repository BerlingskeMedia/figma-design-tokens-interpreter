import { makeTypographyToken } from "@bm/clientside-css-utils";

import tokens from "./__figma__/tokens.json";
import { resolveToken } from "./util.resolve-token";
import { slugifyPropName } from "./util.slugify-prop-name";

const typographyTokens = [
  "SML FS Display",
  "SML FS Trompet",
  "S FS Tekst",
] as const;

export const typographies = Object.fromEntries(
  typographyTokens.map((key) => {
    return [
      key,
      makeTypographyToken(
        `--${slugifyPropName(key)}`,
        getTypographyValues(tokens.global[key].value)
      ),
    ] as const;
  })

  // the "as Record" statement is added, because TypeScript cannot itself infer
  // that the colors-object will contains keys matching the colorTokens array
  // defined above
  //
  // by doing type casting, we get intellisense and type safety "out of the box"
  // when using color tokens in CSS
) as Record<
  (typeof typographyTokens)[number],
  ReturnType<typeof makeTypographyToken>
>;

/**
 * @todo - handle paragraphSpacing ?
 */
function getTypographyValues(value: {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}) {
  return {
    fontFamily: resolveToken(value.fontFamily),
    fontWeight: 400,
    fontSize: resolveToken(value.fontSize),
    lineHeight: resolveToken(value.lineHeight),
    letterSpacing: resolveToken(value.letterSpacing),
  } as const;
}
