function smallestCommons(arr) {
  arr.sort(function(a, b){return a - b;});  // sort input array from low to high
  let common = false; // variable to keep track of whether current test is evenly divisible
  let smallest = arr[1];   // start checking for multiples with highest value of input
  let multiple = 1;   // starting multiple to increase 'smallest' by each loop

  // loop for as long as 'smallest' isn't evenly divisible by any numbers in range
  while (common === false){
    for (let i = arr[0]; i <= arr[1]; i++){
      if (smallest % i === 0){
        common = true;
      }
      else {
        common = false;
        multiple++;
        smallest = arr[1] * multiple;   // increment 'smallest' for next loop's test
        break;
      }
    }
  }

  console.log(smallest);
  return smallest;
}


smallestCommons([1,5]);
