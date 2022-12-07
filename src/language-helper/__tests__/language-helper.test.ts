import * as langHelper from "../language-helper"
import { expect } from "@jest/globals"

describe("Language helper module", () => {
  it("should returns the number of countries in the world", async () => {
    const countriesNumber = await langHelper.countCountries()
    expect(countriesNumber).toEqual(5)
  })

  it("should finds the country with the most official languages, where they officially speak German (de)", async () => {
    const countries = await langHelper.mostLanguagesCountries({
      byLanguages: ["de"],
    })
    expect(countries).toEqual(["BE"])
  })

  it("should counts all the official languages spoken in the listed countries", async () => {
    const countriesLanguagesCount = await langHelper.countLanguages({
      byCountries: ["US", "BE"],
    })
    expect(countriesLanguagesCount).toEqual(4)
  })

  it("should to find the country with the highest number of official languages", async () => {
    const mostLanguagesCountry = await langHelper.mostLanguagesCountries()
    expect(mostLanguagesCountry).toEqual(["BE"])
  })

  it("should to find the most common official language(s), of all countries", async () => {
    const mostLanguagesCountry = await langHelper.mostCommonLanguage()
    expect(mostLanguagesCountry.length).toEqual(2)
    expect(mostLanguagesCountry.includes("nl")).toBeTruthy()
    expect(mostLanguagesCountry.includes("de")).toBeTruthy()
  })
})
