const getRandomFloatNumber = function (min, max, simbolsNumberAfterPoint) {
  if (min < 0) {
    min = Math.abs(min);
  }

  if (max < 0) {
    max = Math.abs(max);
  }

  if (min > max) {
    let minValueStorage = min;
    min = max;
    max = minValueStorage;
  }

  let randomFloatNumber = Math.random() * (max - min) + min;

  if (simbolsNumberAfterPoint) {
    let randomFloatNumberFixed = randomFloatNumber.toFixed(simbolsNumberAfterPoint);
    return randomFloatNumberFixed;
  }

  return randomFloatNumber;
}

const getRandomNumber = function (min, max) {
  return Math.round(getRandomFloatNumber(min, max));
}

getRandomNumber();
getRandomFloatNumber();



const getRandomArrayElement = function (array) {
  let randomIndex = getRandomNumber(0, array.length - 1);
  return array[randomIndex];
}

const getRandomUniqArrayElement = function (initialArray, newArray) {
  let randomElement = getRandomArrayElement(initialArray);

  if (newArray.indexOf(randomElement) == -1) {
    newArray.push(randomElement);
  } else {
    getRandomUniqArrayElement(initialArray, newArray);
  }
}

const getRandomUniqArray = function (array) {
  let randomArrayLength = getRandomNumber(1, array.length);
  let newArray = [];

  for (let i = 0; i < randomArrayLength; i++) {
    getRandomUniqArrayElement(array, newArray);
  }

  return newArray;
}

let adMap = {
  avatarMin: 1,
  avatarMax: 8,
  priceMin: 0,
  priceMax: 100000,
  roomTypes: ['palace', 'flat', 'house', 'bungalow'],
  roomsMin: 1,
  roomsMax: 10,
  checkinTime: ['12:00', '13:00', '14:00'],
  checkoutTime: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
  locationMinX: 35.65000,
  locationMaxX: 35.70000,
  locationMinY: 139.70000,
  locationMaxY: 139.80000,
  locationSimbolsAfterPoint: 5,
}

const getAd = function (map) {
  let {avatarMin, avatarMax, priceMin, priceMax, roomTypes, roomsMin, roomsMax, checkinTime, checkoutTime, features, photos, locationMinX, locationMaxX, locationMinY, locationMaxY, locationSimbolsAfterPoint} = map;

  let ad = {
    author: 'img/avatars/user0' + getRandomNumber(avatarMin, avatarMax) + '.png',
    offer: {
      title: 'Комната с корги',
      address: this.location.x + ', ' + this.location.y,
      price: getRandomNumber(priceMin, priceMax),
      type: getRandomArrayElement(roomTypes),
      rooms: getRandomNumber(roomsMin, roomsMax),
      guests: getRandomNumber(roomsMin, roomsMax),
      checkin: getRandomArrayElement(checkinTime),
      checkout: getRandomArrayElement(checkoutTime),
      features: getRandomUniqArray(features),
      description:'Комната с бегающими повсюду пушистиками корги',
      photos: getRandomUniqArray(photos),
    },
    location: {
      x: getRandomFloatNumber(locationMinX, locationMaxX, locationSimbolsAfterPoint),
      y: getRandomFloatNumber(locationMinY, locationMaxY, locationSimbolsAfterPoint),
    },
  }

  return ad;
}

getAd(adMap);
