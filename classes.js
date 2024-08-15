// 1 - classe

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product('Camisa', 20);
console.log(shirt);

const sneakers = new Product('Jordan', 600);
console.log(sneakers);

const pants = new Product('Jeans', 100);
console.log(pants);

const jacket = new Product('Jaqueta', 150);
console.log(jacket);