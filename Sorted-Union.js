function uniteUnique(arr) {
  let united = []; // empty array to store unique input values

  // iterate through arguments
  for (let i = 0; i < arguments.length; i++){

    // iterate through individual arrays and push value to "united" if current value doesn't already exist there
    for (let j = 0; j< arguments[i].length; j++){
      if (united.indexOf(arguments[i][j]) === -1){
        united.push(arguments[i][j]);
      }
    }
  }

  return united;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
