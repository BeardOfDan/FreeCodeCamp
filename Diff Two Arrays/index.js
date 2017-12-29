function diffArray(arr1, arr2) {
  var newArr = [];

  const elements = new Set(arr1.concat(arr2));

  const iterator = elements.entries();
  const size = elements.size;

  for (let i = 0; i < size; i++) {
    const element = iterator.next().value[0];
    const alpha = !!(arr1.indexOf(element) + 1);
    const beta = !!(arr2.indexOf(element) + 1);

    if (alpha ^ beta) {
      newArr.push(element);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
