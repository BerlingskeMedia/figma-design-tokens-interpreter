import { units } from "@bm/clientside-css";

import { interpretString } from "../util.interpret-string";

it("should handle plain arithmetic expressions", () => {
  expect(interpretString("1 * 2 + 3", {})).toEqual("calc(1 * 2 + 3)");
});

it("should handle arithmetic expressions with referenced values", () => {
  expect(
    interpretString("2 * {reference.path}", {
      reference: {
        path: { value: 4 },
      },
    })
  ).toEqual(`calc(2 * ${units.px(4)})`);
});

it("should handle simple references", () => {
  expect(
    interpretString("{reference.path}", {
      reference: { path: { value: "some value" } },
    })
  ).toEqual("some value");
});

it("should handle simple strings", () => {
  expect(interpretString("string value", {})).toEqual("string value");
});

it("should handle mixed input types strings", () => {
  expect(
    interpretString(
      "static string {reference.number} * 2 more static string {reference.string}",
      {
        reference: {
          number: { value: 4 },
          string: { value: "reference value" },
        },
      }
    )
  ).toEqual(
    `static string calc(${units.px(4)} * 2) more static string reference value`
  );
});
