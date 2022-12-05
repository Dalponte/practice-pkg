const getValueString = (value: number): string => {
  const divisibleBy3 = value % 3 === 0;
  const divisibleBy5 = value % 5 === 0;
  if (divisibleBy3 && divisibleBy5) return "Visual Nuts";
  else if (divisibleBy3) return "Visual";
  else if (divisibleBy5) return "Nuts";
  else return String(value);
};

function integerPrinter(endingNumber: number = 100) {
  const start = 1;
  if (endingNumber < 1)
    throw Error(`invalid endingNumber parameter cannot be bellow ${start}`);
  for (let index = start; index <= endingNumber; index++) {
    console.log(getValueString(index));
  }
}

export default {
  integerPrinter,
};
