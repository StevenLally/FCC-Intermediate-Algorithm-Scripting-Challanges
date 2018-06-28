function addTogether() {

  // function to check if arguments are valid numbers
  function isNumber(arr){
    let test = false;

    for (let i = 0; i < arr.length; i++){
      if (Number.isFinite(arr[i])){
        test = true;
      } 
      else{
        test = false;
        break;
      }     
    }
    return test; 
  }

  if (arguments.length >= 2 && isNumber(arguments)){
    return arguments[0] + arguments[1];
  }
  else if (!isNumber(arguments)){
    return undefined;
  }
  else if (arguments.length === 1){
    let first = arguments[0];  // store argument into variable
    
    // return function to add this argument to next one passed to this function
    return function(){
      if (isNumber(arguments)){
        return first + arguments[0];
      } else{
        return undefined;
      }
    }
  }  
}

addTogether(2,3);
