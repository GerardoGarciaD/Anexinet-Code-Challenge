function convertToDecimal(number, base) {
  // For this particular the parseInt number function was used because it has a parameter that return any base
  return parseInt(number, base);
}

let result = convertToDecimal("10", 8);
console.log(result);
