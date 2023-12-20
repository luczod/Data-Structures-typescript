/*
- The WeakSet or WeakMap classes do not have the entries, keys and
values.
- You can only use objects as keys.
- The reason for creating and using these two classes has to do with performance.
*/

const mapWeak = new WeakMap();
const ob1 = { name: 'Daenerys' };
const ob2 = { name: 'John' };
const ob3 = { name: 'Tyrion' };

mapWeak.set(ob1, 'khaleesi@email.com');
mapWeak.set(ob2, 'johnsnow@email.com');
mapWeak.set(ob3, 'tyrion@email.com');

console.log(mapWeak.has(ob1));
console.log(mapWeak.get(ob3));
mapWeak.delete(ob2);
