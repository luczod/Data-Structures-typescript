// IMPERATIVE
const findMinArray = (array: number[]) => {
  let minValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }

  return minValue;
};
console.log(findMinArray([8, 6, 4, 5, 9]));

// FUNCTIONAL
const min_ = (array: number[]) => {
  return Math.min(...array);
};

console.log(min_([8, 6, 4, 5, 9]));
