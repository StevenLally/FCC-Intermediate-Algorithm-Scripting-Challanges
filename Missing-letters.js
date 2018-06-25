function fearNotLetter(str) {
  let missing;
  let start = str.charCodeAt(0); // get unicode value of first letter of input string (will use this to keep track of sequential letters)

  // iterate through string letters
  for (let i = 0; i < str.length; i++){
    let current = str.charCodeAt(i); // get unicode value of current letter of string

    // if current letter is not the same as "start" then "start" is the missing letter
    if (start != current){
      missing = String.fromCharCode(start)
      break;
    }

    // move "start" to next letter to test
    start++;
  }

  return missing;
}

fearNotLetter("abce");
// assuming only one letter missing in any given input
