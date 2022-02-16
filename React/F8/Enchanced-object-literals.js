var name = 'Javascript';
var price = 1000;

// var courser = {
//     name: name,
//     price: price
// }

var courser = {
    name,
    price,

    getName(){
        return name;
    }
}

console.log(courser);
console.log(courser.getName());

var fieldName = 'new-name';
var fieldPrice = 'price';

const courser1 = {
    name : 'Javascript',
    [fieldName] : 'Java',
    [fieldPrice] : 1000,
}

console.log(courser1);