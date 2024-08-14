// 1 - arrow function

const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Olá " + name + "!";
  } else {
    return "Olá!";
  }
};

console.log(greeting("Davi Fernandes"));
console.log(greeting());

const testeArrow = () => console.log("congratulations");
testeArrow();

// This com arrow function

const user = {
  name: "Davi",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 1000);
  },

  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 1000);
  },
};

user.sayUserName();
user.sayUserNameArrow();
