/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  // Function to check if a given key, value pair exist in given object
  let keyValueCheck = function(obj, key, value){
    if(obj.hasOwnProperty(key) && obj[key] === value){
      return true;
    }
  }
  
  // Iterate through "collection" (the input array of objects)
  for (let i = 0; i < collection.length; i++){
    let match = false;
    
    // Iterate through source object to compare with "collection" array of objects
    for(let item in source){
      // If the current key value pair exists in the object, move onto the next, otherwise break out of the loop with "match" as false
      if (keyValueCheck(collection[i], item, source[item])){
        match = true;
      } else {
        match = false;
        break;
      }
    }

    // push the current "collection" object to the "arr" array only if match came out of loop as true
    if (match === true) {
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
