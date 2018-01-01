const getPair = (char) => {
  if (char === 'A') {
    return ['A', 'T'];
  } else if (char === 'T') {
    return ['T', 'A'];
  } else if (char === 'G') {
    return ['G', 'C'];
  } else {
    return ['C', 'G'];
  }
};

function pairElement(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(getPair(str.charAt(i)));
  }

  return result;
}

console.log(pairElement("GCG"));
