// Do not change any of the function names

// x and y are integers.  Return the larger integer
// if they are the same return either one
function getBiggest(x, y) {
  if (x > y){
    return x;

  } else if (x < y) {
    return y;

  } else {
    return x || y;
  }
}
getBiggest(7, 11);

 // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
function greeting(language) {
    if (language === 'German') {
    return 'Guten Tag!';

  } else if (language === 'Mandarin') {
    return 'Ni Hao!';

  } else if (language === 'Spanish') {
    return 'Hola!';

  } else {
    return 'Hello!';
  }
}
greeting('Spanish');

  // return true if num is 10 or 5
  // otherwise return false
function isTenOrFive(num) {         
  if (num === 10 || num === 5) {
    return true;

  } else {
    return false;
  }
}
isTenOrFive(4);

  // return true if num is less than 50 and greater than 20
  // otherwise return false
function isInRange(num) {
  if (num < 50 && num > 20) {
    return true;

  } else {
    return false;
  }
}
isInRange(100);

  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
function isInteger(num) {
  if (Math.floor(num)) {
    return true;

  } else {
    return false;
  }
}
isInteger(12.4);

  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';

  } else if (num % 3 === 0) {
    return 'fizz';

  } else if (num % 5 === 0) {
    return 'buzz';

  } else {
    return num;
  }
}
fizzBuzz(10);

  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
function isPrime(num) {

}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
