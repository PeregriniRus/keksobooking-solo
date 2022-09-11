const getRandomInt = (startRange, endRange) => {
  if (startRange<0 && endRange<0) {
    return 'Неверные данные';
  }
  if(startRange>endRange){[startRange, endRange] = [endRange, startRange];}
  if (startRange<0) {
    startRange = 0;
  }
  if (endRange<0){
    endRange = 0;
  }
  startRange = Math.ceil(startRange);
  endRange = Math.floor(endRange);
  if (startRange > endRange){
    return 'Диапазон не содержит целочисленные значения';}
  else {
    return Math.floor(Math.random() * (endRange - startRange +1))+ startRange;
  }
};

const getRandomArbitrary = (beginRange, endRange, decimalPlaces) => {
  if (beginRange<0 && endRange<0){
    return 'Неверные данные';
  }
  if (beginRange<0) {
    beginRange = 0;
  }
  if (endRange<0){
    endRange=0;
  }
  if (beginRange>endRange) {[beginRange, endRange] = [endRange, beginRange];}
  const flag = Math.round(Math.random());

  let arbitrary;
  flag === 0 ? arbitrary = Math.random() * (endRange - beginRange) + beginRange : arbitrary = endRange - Math.random() * (endRange - beginRange);
  return parseFloat(arbitrary.toFixed(decimalPlaces));
};
getRandomInt(2,7);
console.log(getRandomArbitrary(2,3,3));
