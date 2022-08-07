// JSON
let services = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  2: {
    carrier: "CCH",
    service: "express",
  },
  3: {
    carrier: "CCH",
    service: "priority",
  },
  15: {
    carrier: "CHP",
    service: "nextday",
  },
  16: {
    carrier: "CHP",
    service: "sameday",
  },
  17: {
    carrier: "CHP",
    service: "express",
  }
}
// JSON
let json = {
  data: {
    BUIN: [
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17
      },
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15
      }
    ],
    LAJA: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1
      }, {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2
      }, {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17
      }
    ],

    LEBU: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1
      }, {
        limit: 6,
        over_carrier_service_id: 3,
        under_carrier_service_id: 3
      }, {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2
      }, {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16
      }
    ],

    LOTA: [
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15
      }, {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16
      }, {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17
      }
    ]
  }
}

const getMaxLimitObj = (lst) => {
  if (lst.lenght) return null

  let max = lst[0];
  lst.forEach(elem => {
    if (elem.limit > max.limit) {
      max = elem
    }
  })
  return max;
}

const filterDicByMaxLimit = (dic) => {
  const keys = Object.keys(dic);

  keys.forEach(key => {
    let array = dic[key];
    let maxLimit = getMaxLimitObj(array);
    dic[key] = maxLimit
  })
}

const joinServices = (dictionary, services) => {
  const newDic = {}
  const keys = Object.keys(dictionary);
  keys.forEach(key => {
    obj = dictionary[key];
    newDic[key] = {
      limit: obj.limit,
      over: services[obj.over_carrier_service_id],
      under: services[obj.under_carrier_service_id]
    }
  })
  return newDic;
}

const locationWithMoreServices = (dictionary) => {
  const keys = Object.keys(dictionary);
  let maxServicesLocationKey = keys[0];

  keys.forEach(key => {
    let service = dictionary[key];
    if (dictionary[maxServicesLocationKey].length < service.length) {
      maxServicesLocationKey = key;
    }
  })
  return maxServicesLocationKey
}

const getMaxService = (servicesByQty) => {
  const servicesId = Object.keys(servicesByQty);
  let maxQty = servicesByQty[servicesId[0]];
  let maxKey = servicesId[0];
  servicesId.forEach(serviceId => {
    if (maxQty < servicesByQty[serviceId]) {
      maxQty = servicesByQty[serviceId]
      maxKey = serviceId
    }
  })
  return services[maxKey]
}

const locationWithMoreCoverture = (dictionary) => {
  const keys = Object.keys(dictionary);
  let servicesQuantityById = {};
  keys.forEach(key => {
    dictionary[key].forEach(service => {
      const serviceId = service.over_carrier_service_id
      if (serviceId in servicesQuantityById) {
        servicesQuantityById[serviceId]++
      } else {
        servicesQuantityById[serviceId] = 1
      }
    })
  })

  const service = getMaxService(servicesQuantityById);
  return service;
}

function cloneObj(obj) {
  let clonedObj = {};
  Object.assign(clonedObj, obj);
  return clonedObj;
}

function main() {
  let auxDic = cloneObj(json.data)
  filterDicByMaxLimit(auxDic)
  const result = joinServices(auxDic, services)
  console.log("Result: ", result);

  let auxDic2 = cloneObj(json.data)
  locationName = locationWithMoreServices(auxDic2);
  console.log("Location with more services:", locationName)

  let auxDic3 = cloneObj(json.data)
  serviceName = locationWithMoreCoverture(auxDic3);
  console.log("Service with more coverture:", serviceName)

}

main()

