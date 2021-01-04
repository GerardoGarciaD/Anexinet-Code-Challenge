function convertToRoman(number) {
  // It verifies the range of the accepted numbers
  if (number < 1 || number > 3999) return "Not a valid number";
  let resultArray = [];

  // An object with the common roman numerals is created
  let numbers = {
    0: {
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    },

    1: {
      9: "XC",
      5: "L",
      4: "XL",
      1: "X",
    },

    2: {
      9: "CM",
      5: "D",
      4: "CD",
      1: "C",
    },

    3: {
      1: "M",
    },
  };

  // An array is created from the integer received and is inverted to match with every digit (units, tens, etc.)
  const arrayOfDigits = Array.from(String(number), Number).reverse();

  // This loop goes through every digit
  for (let i = 0; i < arrayOfDigits.length; i++) {
    if (arrayOfDigits[i] != 0) {
      if (arrayOfDigits[i] === 4) {
        resultArray.push(numbers[i][4]);
        continue;
      }
      if (arrayOfDigits[i] === 5) {
        resultArray.push(numbers[i][5]);
        continue;
      }
      if (arrayOfDigits[i] === 9) {
        resultArray.push(numbers[i][9]);
        continue;
      }
      // The above conditionals are for the common roman numerals

      if (arrayOfDigits[i] < 5) {
        for (let j = 0; j < arrayOfDigits[i]; j++) {
          resultArray.push(numbers[i][1]);
        }
      } else {
        for (let j = 0; j < arrayOfDigits[i] - 5; j++) {
          resultArray.push(numbers[i][1]);
        }
        resultArray.push(numbers[i][5]);
      }

      // The last conditionals are for the digits that are greater or lesser than 5 but different of 9 and 4
    }
  }

  // Finally the array is reversed and put together to show the roman numeral
  return resultArray.reverse().join("");
}

let result = convertToRoman(512);
console.log(result);
