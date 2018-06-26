function binaryAgent(str) {
  let strArr = str.split(" "); // turn binary string into array 
  let convertedArr = [];  // array to store converted values of each binary character

  // loop through array converting each binary letter
  for (let i = 0; i < strArr.length; i++){
    let testArr = strArr[i].split("");  // split binary input into array
    let ascii = 0;  // value to store ascii value of binary input
    
    // if statements to find ascii value of current binary input (***is there a better way to do this?***)
    if (testArr[0] == 1){
      ascii += 128;
    }
    if (testArr[1] == 1){
      ascii += 64;
    }
    if (testArr[2] == 1){
      ascii += 32;
    }
    if (testArr[3] == 1){
      ascii += 16;
    }
    if (testArr[4] == 1){
      ascii += 8;
    }
    if (testArr[5] == 1){
      ascii += 4;
    }
    if (testArr[6] == 1){
      ascii += 2;
    }
    if (testArr[7] == 1){
      ascii += 1;
    }
    convertedArr.push(String.fromCharCode(ascii));
  }

  let newStr = convertedArr.join("");
  return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
