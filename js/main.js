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
