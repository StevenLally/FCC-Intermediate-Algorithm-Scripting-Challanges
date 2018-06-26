function truthCheck(collection, pre) {
  let truthy = true;

  for (let i = 0; i < collection.length; i++){
    if (!collection[i][pre]){
      truthy = false;
      break;
    }
  }
  
  return truthy;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
