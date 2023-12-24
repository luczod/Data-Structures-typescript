import { createNonSortedArray } from '../../../utils';
import { bubbleSort } from '../bubble-sort';

let array = createNonSortedArray(5);
console.log(array);
array = bubbleSort(array);
console.log(array);
