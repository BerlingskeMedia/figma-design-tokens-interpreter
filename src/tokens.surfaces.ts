import { makeSurfaceToken } from "@bm/clientside-css-utils";

import { colors } from "./tokens.colors";

export const surfaces = {
  "WX Lysrød": makeSurfaceToken("--wx-lysroed", {
    background: getColorRgbValue("WX Lysrød"),
    color: getColorRgbValue("WX Sort"),
  }),
  "WX Blå": makeSurfaceToken("--wx-blaa", {
    background: getColorRgbValue("WX Blå"),
    color: getColorRgbValue("WX Hvid"),
  }),
};

function getColorRgbValue(key: keyof typeof colors) {
  return colors[key]({ raw: true }) as `${number} ${number} ${number}`;
}
