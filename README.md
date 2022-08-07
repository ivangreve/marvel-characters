# Ejercicio 1

``` javascript
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

``` javascript
// Services
let services = {
  1: {
    carrier: 'CCH',
    service: 'DEX',
  },
  2: {
    carrier: 'CCH',
    service: 'express',
  },
  3: {
    carrier: 'CCH',
    service: 'priority',
  },
  15: {
    carrier: 'CHP',
    service: 'nextday',
  },
  16: {
    carrier: 'CHP',
    service: 'sameday',
  },
  17: {
    carrier: 'CHP',
    service: 'express',
  },
};
// Locations
let json = {
  data: {
    BUIN: [
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
    ],
    LAJA: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],

    LEBU: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 6,
        over_carrier_service_id: 3,
        under_carrier_service_id: 3,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
    ],

    LOTA: [
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],
  },
};


const getMaxLimitObj = (lst) => {
  if (lst.lenght) return null;

  let max = lst[0];
  lst.forEach((elem) => {
    if (elem.limit > max.limit) {
      max = elem;
    }
  });
  return max;
};

const filterDicByMaxLimit = (dic) => {
  const keys = Object.keys(dic);

  keys.forEach((key) => {
    let array = dic[key];
    let maxLimit = getMaxLimitObj(array);
    dic[key] = maxLimit;
  });
};

const joinServices = (dictionary, services) => {
  const newDic = {};
  const keys = Object.keys(dictionary);
  keys.forEach((key) => {
    obj = dictionary[key];
    newDic[key] = {
      limit: obj.limit,
      over: services[obj.over_carrier_service_id],
      under: services[obj.under_carrier_service_id],
    };
  });
  return newDic;
};

const locationWithMoreServices = (dictionary) => {
  const keys = Object.keys(dictionary);
  let maxServicesLocationKey = keys[0];

  keys.forEach((key) => {
    let service = dictionary[key];
    if (dictionary[maxServicesLocationKey].length < service.length) {
      maxServicesLocationKey = key;
    }
  });
  return maxServicesLocationKey;
};

const getMaxService = (servicesByQty) => {
  const servicesId = Object.keys(servicesByQty);
  let maxQty = servicesByQty[servicesId[0]];
  let maxKey = servicesId[0];
  servicesId.forEach((serviceId) => {
    if (maxQty < servicesByQty[serviceId]) {
      maxQty = servicesByQty[serviceId];
      maxKey = serviceId;
    }
  });
  return services[maxKey];
};

const locationWithMoreCoverture = (dictionary) => {
  const keys = Object.keys(dictionary);
  let servicesQuantityById = {};
  keys.forEach((key) => {
    dictionary[key].forEach((service) => {
      const serviceId = service.over_carrier_service_id;
      if (serviceId in servicesQuantityById) {
        servicesQuantityById[serviceId]++;
      } else {
        servicesQuantityById[serviceId] = 1;
      }
    });
  });

  const service = getMaxService(servicesQuantityById);
  return service;
};

function cloneObj(obj) {
  let clonedObj = {};
  Object.assign(clonedObj, obj);
  return clonedObj;
}

function main() {
  let auxDic = cloneObj(json.data);
  filterDicByMaxLimit(auxDic);
  const result = joinServices(auxDic, services);
  console.log('Result: ', result);

  let auxDic2 = cloneObj(json.data);
  locationName = locationWithMoreServices(auxDic2);
  console.log('Location with more services:', locationName);

  let auxDic3 = cloneObj(json.data);
  serviceName = locationWithMoreCoverture(auxDic3);
  console.log('Service with more coverture:', serviceName);
}

main();

```

[Ejercicio1.js](Ej2/Services.js)


<a href="https://stackblitz.com/edit/js-6n37s8?file=index.js">
  <img
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    alt="Open in StackBlitz"
  />
</a>

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
