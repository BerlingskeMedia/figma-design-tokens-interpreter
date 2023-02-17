import { units } from "@bm/clientside-css";

import { takeArithmeticExpression } from "../interpreter.arithmetic";

import * as tokenDsl from "./tokens.dsl";

it("should handle addition", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.number(1, "%"),
      tokenDsl.plus(),
      tokenDsl.number(2, "px"),
    ])?.get({})
  ).toEqual(`calc(1% + ${units.px(2)})`);
});

it("should handle subtraction", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.number(1, "%"),
      tokenDsl.minus(),
      tokenDsl.number(2, "px"),
    ])?.get({})
  ).toEqual(`calc(1% - ${units.px(2)})`);
});

it("should handle multiplication", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.number(1, "%"),
      tokenDsl.multiply(),
      tokenDsl.number(2, "px"),
    ])?.get({})
  ).toEqual(`calc(1% * ${units.px(2)})`);
});

it("should handle division", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.number(1, "%"),
      tokenDsl.divide(),
      tokenDsl.number(2, "px"),
    ])?.get({})
  ).toEqual(`calc(1% / ${units.px(2)})`);
});

it("should handle mutiple operations", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.number(1, "%"),
      tokenDsl.plus(),
      tokenDsl.number(2, "px"),
      tokenDsl.multiply(),
      tokenDsl.number(2, "%"),
    ])?.get({})
  ).toEqual(`calc(1% + ${units.px(2)} * 2%)`);
});

it("should handle parenthesis as nested calc statements", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.parenthesisLeft(),
      tokenDsl.number(1, "%"),
      tokenDsl.plus(),
      tokenDsl.number(2, "px"),
      tokenDsl.parenthesisRight(),
      tokenDsl.multiply(),
      tokenDsl.number(2, "%"),
    ])?.get({})
  ).toEqual(`calc(calc(1% + ${units.px(2)}) * 2%)`);
});

it("should handle referenced values correctly", () => {
  expect(
    takeArithmeticExpression([
      tokenDsl.number(1, "%"),
      tokenDsl.plus(),
      tokenDsl.reference("nested.var"),
    ])?.get({
      nested: {
        var: { value: 3 },
      },
    })
  ).toEqual(`calc(1% + ${units.px(3)})`);
});
