import { testSortAlgorithm } from 'src/utils/sort-algorithm-tests';
import { radixSort } from '../radix-sort';

testSortAlgorithm(radixSort, 'Radix Sort', { reverseCompare: false });
