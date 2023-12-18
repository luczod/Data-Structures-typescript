const size = 5;
const int16 = new Int16Array(size);
// let array16 = [];
// array16.length = size;
for (let i = 0; i < size; i++) {
  int16[i] = i + 1;
}
console.log(int16);
