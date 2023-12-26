// IMPERATIVE
const printArray = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// printArray([1, 2, 3, 4, 5]);

// FUNCTIONAL
const forEach = (array: number[], action: (item: number) => void) => {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
};

// callback
const logItem = (item: number) => {
  console.log(item);
};
forEach([1, 2, 3, 4, 5], logItem);
