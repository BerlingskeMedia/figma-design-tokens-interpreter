import { slugifyPropName } from "../util.slugify-prop-name";

it("should return a lowercased string with spaces replaced with dashes", () => {
  expect(slugifyPropName("This is a Test")).toBe("this-is-a-test");
});

it("should replace non-alphanumeric characters with dashes", () => {
  expect(slugifyPropName("test_123")).toBe("test-123");
});

it("should remove leading, trailing and repeated dashes", () => {
  expect(slugifyPropName(" this is a  test 123!")).toBe("this-is-a-test-123");
});

it("should return an empty string when input is empty", () => {
  expect(slugifyPropName("")).toBe("");
});
