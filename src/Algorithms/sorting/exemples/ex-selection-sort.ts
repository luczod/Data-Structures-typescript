import { selectionSort } from '../selection-sort';
import { createNonSortedArray } from '../../../utils';

let array = createNonSortedArray(5);
console.log(array);
array = selectionSort(array);
console.log(array);
