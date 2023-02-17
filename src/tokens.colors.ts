import { makeColorToken } from "@bm/clientside-css-utils";

import tokens from "./__figma__/tokens.json";
import { resolveToken } from "./util.resolve-token";
import { slugifyPropName } from "./util.slugify-prop-name";
import { transformHexColorToRgb } from "./utils.transform-hex-color-to-rgb";

const colorTokens = [
  "WX Sort",
  "WX Hvid",
  "WX Blå",
  "WX Lysrød",
  "WX Gul",
  "WX Grøn",
  "WX Grøn",
  "WX Orange",
  "WX Grå",
  "WX System Grå",
  "WX System Grøn",
  "WX System Rød",
  "WX System Lys Grå",
] as const;

export const colors = Object.fromEntries(
  colorTokens.map((key) => {
    return [
      key,
      makeColorToken(
        `--${slugifyPropName(key)}`,
        transformHexColorToRgb(resolveToken(tokens.global[key].value))
      ),
    ] as const;
  })

  // the "as Record" statement is added, because TypeScript cannot itself infer
  // that the colors-object will contains keys matching the colorTokens array
  // defined above
  //
  // by doing type casting, we get intellisense and type safety "out of the box"
  // when using color tokens in CSS
) as Record<(typeof colorTokens)[number], ReturnType<typeof makeColorToken>>;
