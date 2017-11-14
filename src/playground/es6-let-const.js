var nameVar = 'Testname';
var nameVar = 'New Testname';
console.log('nameVar', nameVar);


let nameLet = 'Lettuce';
let nameLet = 'No Lettuce :/';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);


// block scoping

const fullName = 'Jane Doe';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}


const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Jane Doe'));
