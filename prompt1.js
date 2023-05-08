// Prompt 1 - A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

const concatOdds = (arr1, arr2) => {
    const odds = [];
    
    // Iterate over the first array and add odd numbers to the odds array
    for (let num of arr1) {
      if (num % 2 !== 0) {
        odds.push(num);
      }
    }
    
    // Iterate over the second array and add odd numbers to the odds array
    for (let num of arr2) {
      if (num % 2 !== 0) {
        odds.push(num);
      }
    }
    
    // Sort the odds array in ascending order
    odds.sort((a, b) => a - b);
    
    return odds;
  }
  
  // Test cases
  console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])); // Expected output: [-1, 1, 3, 9, 15]
  console.log(concatOdds([2, 4, 6], [1, 3, 5])); // Expected output: [1, 3, 5]
  
  