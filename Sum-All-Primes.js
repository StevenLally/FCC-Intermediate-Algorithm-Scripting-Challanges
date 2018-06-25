function sumPrimes(num) {
  let sum = 0;

  // loop through all numbers between 2 (first prime) and num
  for (let i = 2; i <= num; i++){
    let prime = true;

    // loop through all numbers between 1 and sqrt of 'i' to test if prime
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
      
      // if number is divisible by anything other than 1 or itself, not a prime
      if (i % j == 0){
        prime = false;
        break;
      }
    }

    // add 'i' to sum if it is determined to be prime
    if (prime == true){
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);
