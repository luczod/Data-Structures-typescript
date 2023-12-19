/* The native Set class also accepts an array to be directly
passed to your constructor() */

const setG = new Set<number>();
setG.add(1);
setG.add(2);
setG.add(3);

const setH = new Set<number>();
setH.add(2);
setH.add(3);
setH.add(4);

// union
console.log(new Set([...setG, ...setH]));

// intersection
console.log(new Set([...setG].filter((element) => setH.has(element))));

// difference setG <- setH
console.log(new Set([...setG].filter((element) => !setH.has(element))));
