const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
console.log(friends.sort(comparePerson));

/* JavaScript compares characters according to their value
ASCII. For example, A, J, a, and j have the following decimal ASCII
values: A:65, J: 74, a: 97 and j: 106. */
const names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

console.log(
  names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }),
);

// For accented characters, we can use the localeCompare method
const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));
