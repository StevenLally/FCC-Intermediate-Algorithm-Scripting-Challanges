function translatePigLatin(str) {
  const vowels = "aeiou";   // constant to check for vowels later
  let translated = "";      // empty string for the final translated string
  let translatedArr = [];   // array to push individual translated words to
  let strArr = str.split(" ");  // separate input string into individual words
  
  // iterate through words from input string
  for (let i = 0; i < strArr.length; i++){
    let word = strArr[i].split(""); // turn current word into array of its characters

    // add "way" to end of word if it starts as a vowel
    if (vowels.indexOf(word[0]) >= 0){
      word.push('w','a','y');
      translatedArr.push(word.join(""));
    } 
    else {
      let containsVowel = false;

      // iterate through letters in current word to see if there is a vowel
      for (let j = 0; j < word.length; j++){
        if (vowels.indexOf(word[j]) >= 0){
          containsVowel = true;
          break;
        }
      }

      // if there's a vowel, move consonent cluster to end and add 'ay'
      if (containsVowel == true){
        while (vowels.indexOf(word[0]) === -1){
          word.push(word.shift());
        }

        word.push('a','y');
        translatedArr.push(word.join(""));
      }
      else {
        // no vowels in word so just add 'ay' to end
        word.push('a','y');
        translatedArr.push(word.join(""));
      }
    }
  }

  // join array of translated words back into a string and return it
  translated = translatedArr.join(" ");
  return translated;
}

translatePigLatin("consonant");
