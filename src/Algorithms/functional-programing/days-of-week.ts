// IMPERATIVE
const daysOfWeek = [
  { name: 'Monday', value: 1 },
  { name: 'Tuesday', value: 2 },
  { name: 'Wednesday', value: 7 },
];

const daysOfWeekValues_: number[] = [];

for (let i = 0; i < daysOfWeek.length; i++) {
  daysOfWeekValues_.push(daysOfWeek[i].value);
}

// FUNCTIONAL
const daysOfWeekValues: number[] = daysOfWeek.map((day) => day.value);
console.log(daysOfWeekValues);
