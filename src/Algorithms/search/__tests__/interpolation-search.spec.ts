import { testSearchAlgorithm } from 'src/utils/search-algorithms-tests';
import { interpolationSearch } from '../interpolation-search';

testSearchAlgorithm(interpolationSearch, 'Interpolation Search', { customEquals: false });
