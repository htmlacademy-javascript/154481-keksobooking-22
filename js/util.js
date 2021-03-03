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
    let randomFloatNumberFixed = +randomFloatNumber.toFixed(simbolsNumberAfterPoint);
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

export { getRandomFloatNumber, getRandomNumber, getRandomArrayElement, getRandomUniqArrayElement, getRandomUniqArray };
