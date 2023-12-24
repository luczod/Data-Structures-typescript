import { testSortAlgorithm } from '../../../utils/sort-algorithm-tests';
import { bucketSort } from '../bucket-sort';

testSortAlgorithm(bucketSort, 'Bucket Sort', { reverseCompare: false });
