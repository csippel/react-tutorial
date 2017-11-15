// arguments object not longer bound with arrow funcs

const add = (a, b) => {
    return a + b;
};
console.log(add(77,88,999));


// this not bound inside arrow funcs

const user = {
    name: 'Jane',
    cities: ['Berlin', 'Frankfurt', 'Hamburg'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
};
console.log(user.printPlacesLived());




// Challange

const multiplier = {
    numbers: [1, 2, 3, 5],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
