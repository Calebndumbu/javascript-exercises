function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const roundedCelsius = parseFloat(celsius.toFixed(1));
  return Number.isInteger(roundedCelsius) ? roundedCelsius | 0 : roundedCelsius;
}

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  const roundedFahrenheit = parseFloat(fahrenheit.toFixed(1));
  return Number.isInteger(roundedFahrenheit)
    ? roundedFahrenheit | 0
    : roundedFahrenheit;
}
//toFixed(1): Rounds to one decimal place and
//returns a string.

//parseFloat(): Converts the result back to a number
//after rounding.

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
