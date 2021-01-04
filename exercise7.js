function longestString(s) {
  resultArray = [];
  // This is the initial value of the max length
  let maxLength = 0;

  // An array is created from the original String sentence
  let array = s.split(" ");

  // A loop goes through all the elements to obtain the max length of every word
  array.forEach((e) => {
    if (e.length > maxLength) maxLength = e.length;
  });

  // Another loop is used but, this time is to add the words with the same max length
  array.forEach((word) => {
    // The word is transformed to upper case to avoid duplications
    if (
      word.length === maxLength &&
      !resultArray.includes(word.toUpperCase())
    ) {
      resultArray.push(word.toUpperCase());
    }
  });

  // It verifies if the length of the array is one to only return one word
  if (resultArray.length === 1) return resultArray[0];

  // Other case it returns the whole array
  return resultArray;
}

longestWord = longestString("This is a simple sentence sentence");
console.log(longestWord);
