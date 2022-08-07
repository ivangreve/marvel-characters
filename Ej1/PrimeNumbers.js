const isPrime = (number) => {
  if (number <= 0) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const getPrimeNumberInARange = (a, b) => {
  let primeArrayNumbers = [];
  for (let number = a; number <= b; number++) {
    const isPrimeNumber = isPrime(number);
    if (isPrimeNumber) primeArrayNumbers.push(number);
  }
  return primeArrayNumbers;
};

function main() {
  console.log('Primes Numbers Between -11 and 97:');
  console.log(getPrimeNumberInARange(-11, 97));

  console.log('Primes Numbers Between 1 and 10:');
  console.log(getPrimeNumberInARange(1, 10));

  console.log('Primes Numbers Between 54 and 299:');
  console.log(getPrimeNumberInARange(54, 299));
}

main();
