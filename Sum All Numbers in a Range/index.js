function sumAll(arr) {
  const greater = Math.max.apply(Math, arr);
  const lesser = Math.min.apply(Math, arr);

  return ((greater - lesser) + 1) * (greater + lesser) / 2;
}

console.log(sumAll([1, 4]));
