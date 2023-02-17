import { units } from "@bm/clientside-css";

import { takeLiteral } from "../interpreter.literal";

import * as tokenDsl from "./tokens.dsl";

it("should handle strings", () => {
  expect(takeLiteral([tokenDsl.string("test")])?.get({})).toEqual("test");
});

it("should handle numbers", () => {
  expect(takeLiteral([tokenDsl.number(1)])?.get({})).toEqual(units.px(1));
  expect(takeLiteral([tokenDsl.number(1, "px")])?.get({})).toEqual(units.px(1));
  expect(takeLiteral([tokenDsl.number(1, "%")])?.get({})).toEqual("1%");
});

it("should handle referenced values", () => {
  expect(
    takeLiteral([tokenDsl.reference("nested.var")])?.get({
      nested: {
        var: { value: "test" },
      },
    })
  ).toEqual("test");
});
