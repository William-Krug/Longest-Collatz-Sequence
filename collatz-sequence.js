console.log('Collatz Sequence');

const verbose = true;

function 

function isEven(number) {
   if (verbose) {
      console.log(number);
   }
   return number % 2 === 0
}

if (verbose) {
   console.log('*** isEven() Testing ***');
   console.log('\tcalling isEven() on 4:', isEven(4));
   console.log('\tcalling isEven() on 7:', isEven(7));
}
