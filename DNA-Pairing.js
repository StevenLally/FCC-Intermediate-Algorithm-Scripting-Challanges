function pairElement(str) {
  let arr = str.split(''); // split input string into an array of its characters

  // itterate through array running each through a switch case to determine pairing
  for (let i = 0; i < arr.length; i++){
    switch (arr[i]){
      case 'A':
        arr[i] = ['A', 'T'];
        break;
      
      case 'T':
        arr[i] = ['T', 'A'];
        break;

      case 'C':
        arr[i] = ['C', 'G'];
        break;

      case 'G':
        arr[i] = ['G', 'C'];
        break;
    }
  }

  return arr;
}

pairElement("GCG");
