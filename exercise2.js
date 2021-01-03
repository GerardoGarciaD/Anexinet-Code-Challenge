function repeatedCharacters(firstString, secondString) {
  let arrayString = [...firstString];
  let resultArray = [];
  [...secondString].forEach((e) => {
    if (arrayString.includes(e)) {
      resultArray.push(e);
    }
  });

  return resultArray;
}

let duplicatedCharacters = repeatedCharacters("abcde", "aced");
console.log(duplicatedCharacters);
