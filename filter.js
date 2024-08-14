// 1 - filter

const arr = [1, 2, 3, 4, 5];

const highNumber = arr.filter((n) => n >= 3);

console.log(highNumber);

const users = [
  { name: "Davi", available: true },
  { name: "Carol", available: false },
  { name: "Rebeca", available: false },
  { name: "Jorge", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);
