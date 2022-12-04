export const getRandomInt = (startRange, endRange) => {
  if (startRange < 0 && endRange < 0) {
    return -1;
  }
  if (startRange < 0) {
    startRange = 0;
  }
  if (endRange < 0) {
    endRange = 0;
  }
  if (startRange > endRange) {
    [startRange, endRange] = [endRange, startRange];
  }
  startRange = Math.ceil(startRange);
  endRange = Math.floor(endRange);
  if (startRange > endRange) {
    return -1;
  } else {
    return Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
  }
};

export const getRandomArbitrary = (beginRange, endRange, decimalPlaces = 1) => {
  if (beginRange < 0 && endRange < 0) {
    return -1;
  }
  if (beginRange < 0) {
    beginRange = 0;
  }
  if (endRange < 0) {
    endRange = 0;
  }
  if (beginRange > endRange) {
    [beginRange, endRange] = [endRange, beginRange];
  }

  const arbitrary = Math.random() * (endRange - beginRange) + beginRange;
  return arbitrary.toFixed(decimalPlaces);
};

export const createRandomIndexFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= max - min + 1) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
export const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];
export const getRandomArrayPart = (arr) => {
  const numberOfArrayElements = getRandomInt(1, arr.length);
  const createArrayIndex = createRandomIndexFromRangeGenerator(0, arr.length - 1);
  return Array.from({length: numberOfArrayElements}, () => arr[createArrayIndex()]);
};
