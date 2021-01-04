function repeatedCharacters(firstString, secondString) {
  // An array is created from the first string
  let arrayString = [...firstString.trim()];
  let resultArray = [];

  // A loop through the second array is done, to add the repeated characters of both  strings
  [...secondString.trim()].forEach((e) => {
    // This is to verify if some element is already on the result array, if is not, it's added
    if (arrayString.includes(e)) {
      resultArray.push(e);
    }
  });

  return resultArray;
}

let repeatedChars = repeatedCharacters("abcde", "aced");
console.log(repeatedChars);
