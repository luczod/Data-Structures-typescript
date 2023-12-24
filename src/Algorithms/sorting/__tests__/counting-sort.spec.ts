import { testSortAlgorithm } from '../../../utils/sort-algorithm-tests';
import { countingSort } from '../counting-sort';

testSortAlgorithm(countingSort, 'Counting Sort', { reverseCompare: false });
