import { CountryLanguages, Filter } from "../language-helper"

import { default as countriesLanguages } from "./countries-languages.json"

export const filterCountries = (
  source: CountryLanguages[],
  { byCountries, byLanguages }: Filter
) => {
  return countriesLanguages.filter(({ country, languages }) => {
    if (byCountries) return byCountries.includes(country)
    if (byLanguages)
      return byLanguages.some(
        (byLanguage) => languages.indexOf(byLanguage) >= 0
      )
  })
}

export const countCountries = async () => {
  return countriesLanguages.length
}

export const mostLanguagesCountries = async (filter?: Filter) => {
  const filtered = filter
    ? filterCountries(countriesLanguages, filter)
    : countriesLanguages

  let max = 0
  let countries: string[] = []
  for (const country of filtered) {
    if (country.languages.length > max) {
      max = country.languages.length
      countries = [country.country]
    } else if (country.languages.length === max) countries.push(country.country)
  }
  return countries
}

export const countLanguages = (filter?: Filter) => {
  const filtered = filter
    ? filterCountries(countriesLanguages, filter)
    : countriesLanguages
  const languagesList = filtered.reduce((acc: string[], { languages }) => {
    return [...new Set([...acc, ...languages])]
  }, [])
  return languagesList.length
}

export const mostCommonLanguage = async () => {
  let mostCommon = 0
  const languagesCounter = countriesLanguages.reduce(
    (counter, { languages }) => {
      return languages.reduce((acc: any, curr) => {
        const occurrences = (acc[curr] || 0) + 1
        mostCommon = occurrences > mostCommon ? occurrences : mostCommon
        return { ...acc, [curr]: occurrences }
      }, counter)
    },
    {}
  )
  return Object.keys(languagesCounter).filter((lang: string) => {
    type LanguageKey = keyof typeof languagesCounter
    return languagesCounter[lang as LanguageKey] === mostCommon
  })
}
