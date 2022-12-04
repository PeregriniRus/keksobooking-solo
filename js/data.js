import {getRandomInt, getRandomArbitrary, getRandomArrayElement,getRandomArrayPart} from './utils';

const NUMBER_OF_DECIMAL_PLACES = 5;
const OFFERS_COUNT = 10;
const TYPE_OF_HOUSING = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_HOURS = ['12:00', '13:00', '14:00'];
const CHECK_OUT_HOURS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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
export const getRandomOffers = () => Array.from(getArrayOfRandomNumbers(OFFERS_COUNT),getRandomOffer);
