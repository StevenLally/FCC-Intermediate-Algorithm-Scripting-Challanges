function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let next;
  let sum = 0;  // initialize sum variable at 0

  // loop until we reach a fibonacci number that is higher than the input
  while (current <= num){
    // if current number is odd, add it to the sum total
    if (current % 2 === 1){
      sum += current;
    }

    next = previous + current;  // determine next fibonacci number
    previous = current;  // make the current number the previous number for next loop
    current = next;  // make the next fibonacci number the current number for use in next loop
  }

  return sum;
}

sumFibs(4);
