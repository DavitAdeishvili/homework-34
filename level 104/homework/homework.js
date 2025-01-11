// Task 1:
const [a, b, c] = [1, 2, 3];

// Task 2:
const { name, age } = { name: 'Alice', age: 25 };

// Task 3:
const { name: fullName, age: userAge } = { name: 'Bob', age: 30 };

// Task 4:
const [first, , third] = [1, 2, 3];

// Task 5:
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
for (const { id, name } of users) {
  console.log(`ID: ${id}, Name: ${name}`);
}

// Task 6: 
const [head, ...tail] = [1, 2, 3, 4];

// Task 7:
const array = [1, 2, 3, 4, 5];
const [firstElement, , , , lastElement] = array;

// Task 8:
const objects = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 }
];
const filtered = objects.filter(({ value }) => value > 15);

// Task 9:
const mixedArray = [42, { key: 'value' }];
const [number, { key }] = mixedArray;

// Task 10:
function manualDestructuring(obj) {
  const keys = Object.keys(obj);
  const values = [];
  for (const key of keys) {
    values.push(obj[key]);
  }
  return values;
}