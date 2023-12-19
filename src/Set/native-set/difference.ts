const setE = new Set<number>();
setE.add(1);
setE.add(2);
setE.add(3);
setE.add(5);

const setF = new Set<number>();
setF.add(2);
setF.add(3);
setF.add(4);

const difference = <T>(set1: Set<T>, set2: Set<T>) => {
  const differenceSet = new Set<T>();

  set1.forEach((value) => {
    if (!set2.has(value)) {
      differenceSet.add(value);
    }
  });

  return differenceSet;
};
console.log(difference<number>(setE, setF));
