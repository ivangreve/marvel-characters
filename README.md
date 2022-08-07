# Ejercicio 1

``` language javascript
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

```

[Ejercicio1.js](Ej1/PrimeNumbers.js)


<a href="https://stackblitz.com/edit/js-pjbzxt?file=index.js">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Open in StackBlitz"
  />
</a>
------------------------------------
# Ejercicio 2


------------------------------------
# Ejercicio 3

# 🦾 Marvel Characters 🦸

**You can view this proyect in the folowing link [Firebase]**
[Marvel Characters 🧪](https://marvel-front.web.app/#/characters)

## Run Development 
1. Install dependencies: `npm install`
2. Setup envs: 
   - Create enviroment.prod.ts and enviroment.ts
   - Add apikeys
2. Run server
- `npm start`

## Used Technologies/Tools 🪛

- [Angular 14](https://angular.io/)
- [Firebase](https://firebase.google.com/?hl=es-419&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ36FenpIxgp-Gwfm3ZArrBrIFC3WdpXncJwPiIUPGIXDo9PVr10qBO0aAgNmEALw_wcB&gclsrc=aw.ds)
- [Infinite Scroll](https://www.npmjs.com/package/ngx-infinite-scroll)
- [Ng Bootstrap](https://ng-bootstrap.github.io/#/home)
##
