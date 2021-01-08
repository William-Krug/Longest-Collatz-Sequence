console.log('Collatz Sequence');

const verbose = false;

// Function compares two Collatz Sequences and returns the longer of the two.
// If the sequences are the same length, the first argument is returned.
function compareCollatzSequence(sequence1, sequence2) {
   if (verbose) {
      console.log('compareCollatzSequence -> sequence1.length:', sequence1.length);
      console.log('compareCollatzSequence -> sequence2.length:', sequence2.length);
   }
   return sequence1.length >= sequence2.length ? sequence1 : sequence2;
}

// Helper function to display the longest Collatz Sequence in a given range of
// values and give information on the length of the sequence.
function detailsOfLongestCollatzSequence(maxNumber) {
   let longestCollatzSequence = findLongestCollatzSequence(maxNumber);
   let sequenceLength = longestCollatzSequence.length;
   console.log(`The longest Collatz Sequence between 1 and ${maxNumber} is:`, longestCollatzSequence);
   console.log(`There are ${sequenceLength} values in this sequence`);
}

// Function finds the Collatz Sequences starting at 2 and ending with the
// maxNumber argument and returns the longest Collatz Sequence found.
function findLongestCollatzSequence(maxNumber) {
   let sequence1 = [1, 4, 2, 1];
   let sequence2 = [];
   if (verbose) {
      console.log('findLongestCollatzSequence -> maxNumber:', maxNumber);
      console.log('findLongestCollatzSequence -> sequence1:', sequence1);
      console.log('findLongestCollatzSequence -> sequence2:', sequence2);
   }
   for (let i = 2; i <= maxNumber; i++) {
      sequence2 = getCollatzSequence(i);
      sequence1 = compareCollatzSequence(sequence1, sequence2);
      if (verbose) {
         console.log('findLongestCollatzSequence -> sequence1:', sequence1);
         console.log('findLongestCollatzSequence -> sequence2:', sequence2);
      }
   }
   return sequence1;
}

// Function generates a Collatz Sequence based upon a starting number and
// returns the sequence as an array.
function getCollatzSequence(number) {
   let sequence = [number];
   if (verbose) {
      console.log('getCollatzSequence -> number:', number);
      console.log('getCollatzSequence -> sequence:', sequence);
   }
   do {
      if (isEven(number)) {
         number /= 2;
         if (verbose) {
            console.log('getCollatzSequence -> number:', number);
         }
      } else {
         number = (number * 3) + 1;
         if (verbose) {
            console.log('getCollatzSequence -> number:', number);
         }
      }
      sequence.push(number);
      if (verbose) {
         console.log('getCollatzSequence -> sequence:', sequence);
      }
   } while (sequence[sequence.length - 1] !== 1);
   return sequence;
}

// Function checks if the provided number is even and returns a boolean value.
function isEven(number) {
   if (verbose) {
      console.log('isEven -> number:', number);
   }
   return number % 2 === 0
}


// function testing
const testCollatzSequence = [13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
const testCollatzSequence2 = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
const collatzSequence9 = [9, 28, 14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
console.log('*** isEven() Testing ***');
console.log('\tcalling isEven() on 4:', isEven(4));
console.log('\tcalling isEven() on 7:', isEven(7));
console.log('*** getCollatzSequence() Testing ***');
console.log('\texpected output:', testCollatzSequence);
console.log('\tcalling getCollatzSequence() on 13:', getCollatzSequence(13));
console.log('\texpected output:', testCollatzSequence2);
console.log('\tcalling getCollatzSequence() on 7:', getCollatzSequence(7));
console.log('*** compareCollatzSequence() Testing ***');
console.log('\tcomparing Collatz Sequences between 7 and 13, 7 should have the longest chain:', compareCollatzSequence(getCollatzSequence(13), getCollatzSequence(7)));
console.log('*** findLongestCollatzSequence() Testing ***');
console.log('\tComapring starting numbers 1 through 10, longest sequence should begin with 9:', findLongestCollatzSequence(9));
console.log('*** detailsOfLongestCollatzSequence() Testing ***');
console.log('\tComapring starting numbers 1 through 10, longest sequence should begin with 9 and there should be 20 values in the sequence', detailsOfLongestCollatzSequence(10));
