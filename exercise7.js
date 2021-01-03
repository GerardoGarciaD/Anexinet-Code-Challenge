function longestString(s) {
  let maxLength = 0;
  let array = s.split(" ");
  array.forEach((e) => {
    if (e.length > maxLength) maxLength = e.length;
  });
  let resultArray = array.filter((word) => word.length === maxLength);
  if (resultArray.length === 1) return resultArray[0];
  return resultArray;
}

maxLetters = longestString("This is an incredible company :D ");
