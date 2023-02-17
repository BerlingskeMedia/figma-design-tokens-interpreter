import { selectValueByPath } from "../util.select-value";

const values = {
  root: {
    nested: {
      value: "hello",
    },
    array: [1, 2, 3],
    bool: false,
  },
};

it("should return the correct value for a nested property path", () => {
  expect(selectValueByPath("root.nested.value", values)).toBe("hello");
});

it("should return undefined for a non-existent property path", () => {
  expect(selectValueByPath("root.unknown", values)).toBeUndefined();
  expect(selectValueByPath("root.unknown.nested", values)).toBeUndefined();
});

it("should return undefined for a property path that ends in a non-object", () => {
  expect(selectValueByPath("root.bool.nested", values)).toBeUndefined();
});

it("should return undefined for an empty path", () => {
  expect(selectValueByPath("", values)).toBeUndefined();
});
