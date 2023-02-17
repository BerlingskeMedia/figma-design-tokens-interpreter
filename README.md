# Design tokens

Design tokens are a way to represent design decisions as semantic data, which provide a unified language for reasoning about the layout between designers and developers.

These sample tokens in `tokens.json` are exported directly from Figma. The raw tokens are translated into runtime token definitions, using the core `css-utils` package to help developers ensure consistent rendering of e.g. composite tokens (typographies, surfaces etc.).

## Table of Contents

- [Design tokens](#design-tokens)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Categories of tokens](#categories-of-tokens)
    - [Colors](#colors)
    - [Surfaces](#surfaces)
    - [Typography](#typography)

## Getting started

For more information about working with the monorepo, we refer to the [main README.md](/README.md).

To hit the ground running, all you need to do to bootstrap your local dev environment, is to run Storybook with the following command from the root of the monorepo:

```bash
> npm run storybook -- @bm/wxdk-design-tokens
```

## Categories of tokens

We've decided to split tokens into several distinct categories, each of which are exposed in a way that allows consistent rendering across webpages.

### Colors

Color tokens map the core color definitions from Figma, but this set of tokens is only intended to be used on text, iconography and similar (ie. they are not to be used as background colors)

### Surfaces

Surface tokens extend the color tokens, and create compisite values that define both background and text colors. These tokens are explicitly intended to be used when applying background coloring of a layer.

The primary purpose of using surface tokens rather than color tokens, is the ability to consistently define the relationship between a background color and a readable text color. For instance a light brown background color might need a dark text color, whereas a dark blue background color would need a white text color.

Using surface tokens, we can consistently guarantee that the frontend renders using readable text colors. Additionally it becomes easier to swap text colors, if a background color changes luminosity and a switch from dark to light text is desired down the line.

### Typography

Typography tokens are high-level decisions regarding rendering of fonts, and define a composite value that combine the following CSS properties into a single token:

- font-family
- font-weight
- font-size
- line-height
- letter-spacing
