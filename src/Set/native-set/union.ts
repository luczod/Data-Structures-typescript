const setA = new Set<number>();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set<number>();
setB.add(2);
setB.add(3);
setB.add(4);

const union = <T>(set1: Set<T>, set2: Set<T>) => {
  const unionAb = new Set<T>();

  set1.forEach((value) => unionAb.add(value));
  set2.forEach((value) => unionAb.add(value));

  return unionAb;
};
console.log(union<number>(setA, setB));
