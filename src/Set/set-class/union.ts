import { SetCls } from './set-class';

const setA = new SetCls<number>();

setA.add(1, 2, 2, 3, 4);
setA.add(2);

const setB = new SetCls<number>();
setB.add(3, 4, 5, 6);
const unionAB = setA.union(setB);
console.log('UNION', unionAB.values());
