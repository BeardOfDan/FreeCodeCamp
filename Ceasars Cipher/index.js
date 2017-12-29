function rot13(str) { // LBH QVQ VG!
  const shiftBy = 13;
  let shifted = '';

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    const charCode = str.charCodeAt(i);
    if (/[a-z]/.test(char)) { // lowercase letter
      shifted += String.fromCharCode(((charCode - 97 + shiftBy) % 26) + 97);
    } else if (/[A-Z]/.test(char)) { // uppercase letter
      shifted += String.fromCharCode(((charCode - 65 + shiftBy) % 26) + 65);
    } else { // not a letter, so don't shift
      shifted += char;
    }
  }

  return shifted;
}

// Change the inputs below to test
console.log(rot13("SERR pbqr PnZc"));

