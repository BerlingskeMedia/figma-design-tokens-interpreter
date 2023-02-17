import { z } from "zod";

const hexColorSchema = z.string().regex(/^#?([0-9a-f]{3})|([0-9a-f]{6})$/i);

export function transformHexColorToRgb(
  input: string
): `${number} ${number} ${number}` {
  const rawHexColor = hexColorSchema.parse(input).replace("#", "");

  switch (rawHexColor.length) {
    case 6: {
      const r = parseInt(rawHexColor.substring(0, 2), 16);
      const g = parseInt(rawHexColor.substring(2, 4), 16);
      const b = parseInt(rawHexColor.substring(4, 6), 16);

      return `${r} ${g} ${b}`;
    }

    case 3: {
      const r = parseInt(rawHexColor.substring(0, 1).repeat(2), 16);
      const g = parseInt(rawHexColor.substring(1, 2).repeat(2), 16);
      const b = parseInt(rawHexColor.substring(2, 3).repeat(2), 16);

      return `${r} ${g} ${b}`;
    }

    default:
      throw new Error(
        `transformHexColor(): invalid input "${hexColorSchema}" given, cannot parse hex value`
      );
  }
}
