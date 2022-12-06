import langHelper from "../language-helper"
import { expect } from "@jest/globals"

describe("Language helper module", () => {
  it("should returns the number of countries in the world", () => {
    const countriesNumber = langHelper.countCountries()
    expect(countriesNumber).toEqual(5)
  })

  it("should finds the country with the most official languages, where they officially speak German (de)", () => {
    const filter = (languages: string[]) => languages.includes("de")
    const mostLanguagesWithGermanCountry =
      langHelper.mostLanguagesCountry(filter)
    expect(mostLanguagesWithGermanCountry).toEqual(["BE"])
  })

  it("should counts all the official languages spoken in the listed countries", () => {
    const countriesLanguagesCount = langHelper.countLanguages(["US", "BE"])
    expect(countriesLanguagesCount).toEqual({ US: 1, BE: 3 })
  })

  it("should to find the country with the highest number of official languages", () => {
    const mostLanguagesCountry = langHelper.mostLanguagesCountry()
    expect(mostLanguagesCountry).toEqual(["BE"])
  })

  it("should to find the most common official language(s), of all countries", () => {
    const mostLanguagesCountry = langHelper.mostCommonLanguage()
    expect(mostLanguagesCountry).toEqual(["de", "nl"])
  })
})
