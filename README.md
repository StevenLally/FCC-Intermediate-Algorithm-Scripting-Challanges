# FCC-Intermediate-Algorithm-Scripting-Challanges
Collection of my solutions for some of the FCC Intermediate Algorithm Scripting Challanges

1. Wherefore-art-thou: "Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array."

2. Pig-Latin: "Translate the provided string to pig latin.  Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".  If a word begins with a vowel you just add "way" to the end.  Input strings are guaranteed to be English words in all lowercase."

3. DNA-Pairing: "The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.  Base pairs are a pair of AT and CG. Match the missing element to the provided character.  Return the provided character as the first element in each array.  For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]  The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array."

4. Missing-letters: "Find the missing letter in the passed letter range and return it.  If all letters are present in the range, return undefined."

5. Sorted-Union: "Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.  In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.  The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order."  Exs . uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].  uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

6. Convert-HTML-Entities: "Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities." Ex. convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.

7. Sum-All-Odd-Fibonacci-Numbers: "Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.  The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5."

8. Sum-All-Primes: "Sum all the prime numbers up to and including the provided number.  A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.  The provided number may not be a prime." Ex. sumPrimes(10) should return 17.
