// 1 - destructuring

const fruits = ["Maçã", "Laranja", "Melancia"];

const [f1, f2, f3] = fruits;
console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
  name: "Mouse",
  price: 29.99,
  category: "Periféricos",
  color: "Preto",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e tem a cor ${color}`
);
