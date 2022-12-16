import { describe, expect } from "@jest/globals"
import { integerPrinter } from "../number-printer"

const log = jest.spyOn(console, "log").mockImplementation(jest.fn())

describe("Number printer module", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should fail if sent number bellow 1", () => {
    expect(() => integerPrinter(0)).toThrow(
      "endingNumber parameter cannot be bellow 1"
    )
  })

  it("should print numbers up to 100", () => {
    integerPrinter()
    expect(log).toBeCalledTimes(100)
    expect(log).toHaveBeenNthCalledWith(1, "1")
    expect(log).toHaveBeenNthCalledWith(3, "Visual")
    expect(log).toHaveBeenNthCalledWith(5, "Nuts")
    expect(log).toHaveBeenNthCalledWith(15, "Visual Nuts")
    expect(log).toHaveBeenNthCalledWith(30, "Visual Nuts")
  })

  it("should print numbers up to 500", () => {
    integerPrinter(500)
    expect(log).toBeCalledTimes(500)
    expect(log).toHaveBeenNthCalledWith(3, "Visual")
    expect(log).toHaveBeenNthCalledWith(5, "Nuts")
    expect(log).toHaveBeenNthCalledWith(127, "127")
    expect(log).toHaveBeenNthCalledWith(150, "Visual Nuts")
    expect(log).toHaveBeenNthCalledWith(300, "Visual Nuts")
  })
})
