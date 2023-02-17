import { css } from "@linaria/core";

import { makeFontToken } from "@bm/clientside-css-utils";

import tokens from "./__figma__/tokens.json";

/**
 * @todo - we need to map the naming of these fonts more tightly to that of the
 * tokens.json file, but we will need to discuss naming conventions, fallback
 * fonts etc. with the designers
 *
 * for now we've needed to create a hardcoded mapping of font weights, without
 * actually using the definitions from tokens.json!
 *
 * Additionally the hairline font doesn't appear in any current design tokens,
 * can this be omitted?
 */

export const fonts = {
  hairline: makeFontToken(
    {
      regular: [`"WX Hairline", sans`, "400"],
    },
    "regular"
  ),

  newDisplay: makeFontToken(
    {
      regular: [
        `"${tokens.global.fontFamilies["wx-new-display"].value}", sans-serif`,
        "400",
      ],
      medium: [
        `"${tokens.global.fontFamilies["wx-new-display"].value}", sans-serif`,
        "500",
      ],
      bold: [
        `"${tokens.global.fontFamilies["wx-new-display"].value}", sans-serif`,
        "700",
      ],
      ["extra-bold"]: [
        `"${tokens.global.fontFamilies["wx-new-display"].value}", sans-serif`,
        "800",
      ],
    },
    "regular"
  ),

  sans: makeFontToken(
    {
      thin: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "100",
      ],
      light: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "300",
      ],
      regular: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "400",
      ],
      medium: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "500",
      ],
      ["semi-bold"]: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "600",
      ],
      bold: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "700",
      ],
      ["extra-bold"]: [
        `"${tokens.global.fontFamilies["wx-sans"].value}", sans-serif`,
        "800",
      ],
    },
    "regular"
  ),

  text: makeFontToken(
    {
      ["extra-light"]: [
        `"${tokens.global.fontFamilies["wx-tekst"].value}"`,
        "200",
      ],
      light: [`"${tokens.global.fontFamilies["wx-tekst"].value}"`, "300"],
      regular: [`"${tokens.global.fontFamilies["wx-tekst"].value}"`, "400"],
      medium: [`"${tokens.global.fontFamilies["wx-tekst"].value}"`, "500"],
      ["semi-bold"]: [
        `"${tokens.global.fontFamilies["wx-tekst"].value}"`,
        "600",
      ],
      bold: [`"${tokens.global.fontFamilies["wx-tekst"].value}"`, "700"],
    },
    "regular"
  ),
};

export const something = css`
  :global() {
    @font-face {
      font-family: "WX Hairline";
      src: url("/fonts/WXHairline-RegularWEB.woff2") format("woff2"),
        url("/fonts/WXHairline-RegularWEB.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-new-display"].value}";
      src: url("/fonts/WXNewDisplay-RegularWEB.woff2") format("woff2"),
        url("/fonts/WXNewDisplay-RegularWEB.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-new-display"].value}";
      src: url("/fonts/WXNewDisplay-ItalicWEB.woff2") format("woff2"),
        url("/fonts/WXNewDisplay-ItalicWEB.woff") format("woff");
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-new-display"].value}";
      src: url("/fonts/WXNewDisplay-MediumWEB.woff2") format("woff2"),
        url("/fonts/WXNewDisplay-MediumWEB.woff") format("woff");
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-new-display"].value}";
      src: url("/fonts/WXNewDisplay-BoldWEB.woff2") format("woff2"),
        url("/fonts/WXNewDisplay-BoldWEB.woff") format("woff");
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-new-display"].value}";
      src: url("/fonts/WXNewDisplay-ExtraboldWEB.woff2") format("woff2"),
        url("/fonts/WXNewDisplay-ExtraboldWEB.woff") format("woff");
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-ThinWEB.woff2") format("woff2"),
        url("/fonts/WXSans-ThinWEB.woff") format("woff");
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-LightWEB.woff2") format("woff2"),
        url("/fonts/WXSans-LightWEB.woff") format("woff");
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-RegularWEB.woff2") format("woff2"),
        url("/fonts/WXSans-RegularWEB.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-ItalicWEB.woff2") format("woff2"),
        url("/fonts/WXSans-ItalicWEB.woff") format("woff");
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-MediumWEB.woff2") format("woff2"),
        url("/fonts/WXSans-MediumWEB.woff") format("woff");
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-SemiboldWEB.woff2") format("woff2"),
        url("/fonts/WXSans-SemiboldWEB.woff") format("woff");
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-BoldWEB.woff2") format("woff2"),
        url("/fonts/WXSans-BoldWEB.woff") format("woff");
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-sans"].value}";
      src: url("/fonts/WXSans-ExtraboldWEB.woff2") format("woff2"),
        url("/fonts/WXSans-ExtraboldWEB.woff") format("woff");
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-ExtralightWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-ExtralightWEB.woff") format("woff");
      font-weight: 200;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-LightWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-LightWEB.woff") format("woff");
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-LightItalicWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-LightItalicWEB.woff") format("woff");
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-RegularWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-RegularWEB.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-ItalicWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-ItalicWEB.woff") format("woff");
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-MediumWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-MediumWEB.woff") format("woff");
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-SemiboldWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-SemiboldWEB.woff") format("woff");
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "${tokens.global.fontFamilies["wx-tekst"].value}";
      src: url("/fonts/WXTekst-BoldWEB.woff2") format("woff2"),
        url("/fonts/WXTekst-BoldWEB.woff") format("woff");
      font-weight: 700;
      font-style: normal;
    }
  }
`;
