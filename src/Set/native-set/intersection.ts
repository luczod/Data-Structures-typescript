const setC = new Set<number>();
setC.add(1);
setC.add(2);
setC.add(3);

const setD = new Set<number>();
setD.add(2);
setD.add(3);
setD.add(4);

const intersection = <T>(set1: Set<T>, set2: Set<T>) => {
  const intersectionSet = new Set<T>();
  // not optimized
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  });

  return intersectionSet;
};
console.log(intersection<number>(setC, setD));
