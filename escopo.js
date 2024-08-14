// 1 - var, let, const
var x = 10;
var y = 15;

if (y > x) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > a) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log(i);

function showName() {
  var name = "Davi";
  console.log(name);
}

showName();



