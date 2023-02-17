import { css, cx } from "@linaria/core";
import { useLayoutEffect, useRef } from "react";

import { colors } from "../tokens.colors";

export default {};

const invertedColors = ["WX Sort"];
const examples = Object.entries(colors).map(([displayName, color]) => ({
  displayName,
  css: `color: ${color()};`,
}));

export const Colors = () => {
  return (
    <code>
      {examples.map((props, index) => {
        return (
          <Example
            key={index}
            {...props}
            inverted={invertedColors.includes(props.displayName)}
          />
        );
      })}
    </code>
  );
};

function Example(props: {
  displayName: string;
  inverted: boolean;
  css: string;
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.cssText = props.css;
    }
  }, [props.css]);

  return (
    <p ref={ref} className={cx(exampleCls, props.inverted && "inverted")}>
      {props.displayName}
      <br />
      <br />
      {props.css}
    </p>
  );
}

const exampleCls = css`
  padding: 8px;

  background: #000;
  border: 1px solid #000;

  &.inverted {
    background: #fff;
  }
`;
