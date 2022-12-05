import { visualNutsIntegerPrinter } from "../number-printer";

test("should fail if sent number bellow 1", () => {
  expect(() => visualNutsIntegerPrinter(0)).toThrow(
    "endingNumber parameter cannot be bellow 1"
  );
});

test("should succeed if sent a valid number", () => {
  expect(visualNutsIntegerPrinter(2)).toBeTruthy();
});
