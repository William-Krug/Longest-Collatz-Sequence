console.log('Collatz Sequence');

const verbose = false;

function getCollatzSequence(number) {
   let sequence = [number];
   if (verbose) {
      console.log('getCollatzSequence -> number:', number);
      console.log('getCollatzSequence -> sequence:', sequence);
   }
   do {
      if  (isEven(number)) {
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

function isEven(number) {
   if (verbose) {
      console.log('isEven -> number:', number);
   }
   return number % 2 === 0
}


const testCollatzSequence = [13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
const testCollatzSequence2 = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
console.log('*** isEven() Testing ***');
console.log('\tcalling isEven() on 4:', isEven(4));
console.log('\tcalling isEven() on 7:', isEven(7));
console.log('*** getCollatzSequence() Testing ***');
console.log('\texpected output:', testCollatzSequence);
console.log('\tcalling getCollatzSequence() on 13:', getCollatzSequence(13));
console.log('\texpected output:', testCollatzSequence2);
console.log('\tcalling getCollatzSequence() on 7:', getCollatzSequence(7));
