const map = new Map();
map.set('Daenerys', 'khaleesi@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf')); // true
console.log(map.size); // 3
console.log(map.keys()); // MapIterator
console.log(map.values());
