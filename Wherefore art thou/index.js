
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  // // test every element in the collection
  for (let i = 0; i < collection.length; i++) {
    // test the current element
    let match = true;
    for (let j = 0; j < keys.length; j++) {
      if (collection[i][keys[j]] !== source[keys[j]]) {
        match = false;
        break;
      }
    }
    if (match) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
