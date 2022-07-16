// ----------> This function to generate mock random number <-----------

export function randomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

export function randomNumberRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomNumberInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function generatedRandomNumberToArray(lenArr) {
  return [...Array(lenArr).map(() => randomNumber(100))];
}
