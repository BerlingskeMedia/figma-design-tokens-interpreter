import { transformHexColorToRgb } from "../utils.transform-hex-color-to-rgb";

it("should correctly transform a 6-digit hex color to an RGB color", () => {
  expect(transformHexColorToRgb("#123456")).toBe("18 52 86");
});

it("should correctly transform a 3-digit hex color to an RGB color", () => {
  expect(transformHexColorToRgb("#f06")).toBe("255 0 102");
});

it("should ignore casing in hex colors", () => {
  expect(transformHexColorToRgb("#FfF")).toBe("255 255 255");
});

it("should throw an error when given an invalid hex color", () => {
  expect(() => transformHexColorToRgb("invalid")).toThrow();
});

it("should throw an error when given a 4- or 8-digit hex color", () => {
  expect(() => transformHexColorToRgb("#1234")).toThrow();
  expect(() => transformHexColorToRgb("#12345678")).toThrow();
});
