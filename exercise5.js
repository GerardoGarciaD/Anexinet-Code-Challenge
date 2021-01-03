function convertToRoman(number) {
  if (number < 1 || number > 3999) return "Not a valid number";
  let resultArray = [];
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

  const arrayOfDigits = Array.from(String(number), Number).reverse();
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
    }
  }

  return resultArray.reverse().join("");
}

let result = convertToRoman(4000);
console.log(result);
