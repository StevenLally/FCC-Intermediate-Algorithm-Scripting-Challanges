function steamrollArray(arr) {
  let flattened = [];  // empty array to store result values

  // recursive function to call itself if it finds any nested arrays and loops through them pushing values to 'flattened' array
  function arrayCheck(item){
    for (let i = 0; i < item.length; i++){
      let current = item[i];
      if (Array.isArray(current) === false){
        flattened.push(current);
      }
      else {
        arrayCheck(current);
      }
    }
  }

  arrayCheck(arr);  
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);
