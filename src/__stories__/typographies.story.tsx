import { css } from "@linaria/core";
import { useLayoutEffect, useRef } from "react";

import { typographies } from "../tokens.typographies";

export default {};

const examples = Object.entries(typographies).map(
  ([displayName, typography]) => ({
    displayName,
    css: `font: ${typography()};`,
  })
);

export const Surfaces = () => {
  return (
    <div>
      {examples.map((props, index) => {
        return <Example key={index} {...props} />;
      })}
    </div>
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

      <code>{props.css}</code>
    </p>
  );
}

const exampleCls = css`
  padding: 20px;

  background: #f5f5f5;
  border: 1px solid #000;

  & > code {
    display: block;
    margin: 20px -20px -20px;
    padding: 20px;

    background: #fff;
    border-top: 1px solid #000;

    font-size: 14px;
    line-height: 1.25;
  }
`;
