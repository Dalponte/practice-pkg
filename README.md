## Package creation practice

Practicing to publish a basic package with sample functionality.

### Usage

You can install using:

`npm i @dalponte.m/practice-pkg`

The package export two modules:

```javascript
var practicePkg = require("@dalponte.m/practice-pkg")

const { NumberPrinter, LanguageHelper } = practicePkg
console.log(NumberPrinter, LanguageHelper)

NumberPrinter.integerPrinter()

Promise.all([
  LanguageHelper.countCountries(),
  LanguageHelper.mostLanguagesCountries({
    byLanguages: ["de"],
  }),
  LanguageHelper.countLanguages({
    byCountries: ["US", "BE"],
  }),
  LanguageHelper.mostLanguagesCountries(),
  LanguageHelper.mostCommonLanguage(),
]).then((ex2) =>
  ex2.forEach((result, i) => console.log(`Item ${i + 1}:`, result))
)
```
