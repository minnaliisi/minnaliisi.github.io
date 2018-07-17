/** Unit Converter **/
function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32)/1.8;
//  return celsius.toFixed(1);

  return Math.round(10*celsius)/10;//conversion code
}
