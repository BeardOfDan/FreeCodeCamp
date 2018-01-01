
function myReplace(str, before, after) {
  let newStr = str.slice();

  let index = newStr.indexOf(before);
  while (index !== -1) {
    const firstChar = (str.charAt(index).toLowerCase() === str.charAt(index)) ? after.slice(0, 1).toLowerCase() : after.slice(0, 1).toUpperCase();
    newStr = newStr.slice(0, index) + firstChar + after.slice(1) + newStr.slice((index + before.length));
    index = newStr.indexOf(before);
  }

  return newStr;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
