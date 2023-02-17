import { css } from "@linaria/core";
import { useLayoutEffect, useRef } from "react";

import { surfaces } from "../tokens.surfaces";

export default {};

const examples = Object.entries(surfaces).map(([displayName, surface]) => ({
  displayName,
  css: `background: ${surface()};`,
}));

export const Surfaces = () => {
  return (
    <code>
      {examples.map((props, index) => {
        return <Example key={index} {...props} />;
      })}
    </code>
  );
};

function Example(props: { displayName: string; css: string }): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.cssText = props.css;
    }
  }, [props.css]);

  return (
    <p ref={ref} className={exampleCls}>
      {props.displayName}
      <br />
      <br />
      {props.css}
    </p>
  );
}

const exampleCls = css`
  padding: 8px;
`;
