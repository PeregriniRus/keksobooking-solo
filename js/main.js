const getRandomInt = (startRange, endRange) => {
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

const getRandomArbitrary = (beginRange, endRange, decimalPlaces = 1) => {
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
getRandomInt(2, 7);
getRandomArbitrary(2, 3, 3);

const TYPE_OF_HOUSING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_HOURS = ['12:00', '13:00', '14:00'];
const CHECK_OUT_HOURS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createRandomIndexFromRangeGenerator = (min, max) => {
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

const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const NUMBER_OF_DECIMAL_PLACES = 5;
const LatRange = {
  MIN: 35.65, MAX: 35.7,
};
const LngRange = {
  MIN: 139.70000, MAX: 139.80000,
};
const PriceRange = {
  MIN: 1000, MAX: 7000,
};
const RoomRange = {
  MIN: 1, MAX: 4,
};
const GuestsRange = {
  MIN: 1, MAX: 7,
};

const getRandomArrayPart = (arr) => {
  const numberOfArrayElements = getRandomInt(1, arr.length);
  const createArrayIndex = createRandomIndexFromRangeGenerator(0, arr.length - 1);
  return Array.from({length: numberOfArrayElements}, () => arr[createArrayIndex()]);
};

const getRandomOffer = (index) => {
  const location = {
    lat: getRandomArbitrary(LatRange.MIN, LatRange.MAX, NUMBER_OF_DECIMAL_PLACES),
    lng: getRandomArbitrary(LngRange.MIN, LngRange.MAX, NUMBER_OF_DECIMAL_PLACES),
  };
  return {
    offer: {
      title: 'information about the ad',
      address: `${location.lat}, ${location.lng}`,
      checkin: getRandomArrayElement(CHECK_IN_HOURS),
      checkout: getRandomArrayElement(CHECK_OUT_HOURS),
      guests: getRandomInt(GuestsRange.MIN, GuestsRange.MAX),
      price: getRandomInt(PriceRange.MIN, PriceRange.MAX),
      rooms: getRandomInt(RoomRange.MIN, RoomRange.MAX),
      type: getRandomArrayElement(TYPE_OF_HOUSING),
      features: getRandomArrayPart(FEATURES),
      description: 'Удобный, чистый номер для отдыхающих',
      photos: getRandomArrayPart(PHOTOS),
    },
    author: {
      avatar: `img/avatars/user${`0${index}`.substring(-2, 2)}.png`,
    },
    location,
  };
};

const getArrayOfRandomNumbers = (length) => {
  const array = Array.from({length: length}, (_item, i) => i + 1);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomOffers = (length) => Array.from(getArrayOfRandomNumbers(length), getRandomOffer);

const OFFERS_COUNT = 10;

getRandomOffers(OFFERS_COUNT);
