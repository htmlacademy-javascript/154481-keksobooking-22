const ROOM_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];



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


const getRandomArrayElement = function (array) {
  let randomIndex = getRandomNumber(0, array.length - 1);
  return array[randomIndex];
}


const getRandomUniqArrayElement = function (initialArray, newArray) {
  let randomElement = getRandomArrayElement(initialArray);

  if (newArray.includes(randomElement)) {
    getRandomUniqArrayElement(initialArray, newArray);
  } else {
    newArray.push(randomElement);
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


const getAd = function () {
  let location = {
    x: getRandomFloatNumber(35.65000, 35.70000, 5),
    y: getRandomFloatNumber(139.70000, 139.80000, 5),
  }

  let ad = {
    author: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    offer: {
      title: 'Комната с корги',
      address: location.x + ', ' + location.y,
      price: getRandomNumber(0, 100000),
      type: getRandomArrayElement(ROOM_TYPES),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(CHECKIN_TIME),
      checkout: getRandomArrayElement(CHECKOUT_TIME),
      features: getRandomUniqArray(FEATURES),
      description:'Комната с бегающими повсюду пушистиками корги',
      photos: getRandomUniqArray(PHOTOS),
    },
    location: location,
  }

  return ad;
}

let ads = new Array(10).fill(null).map(() => getAd());
ads;
