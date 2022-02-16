var array = ['Javascript', 'PHP', 'Ruby'];

//Destructuring
var [a , , c] = array;

console.log(a,c);

// Rest parameters lấy ra phần còn lại khi sử dụng với destructuring hoặc định nghĩa tham số

var [d, ...rest] = array;

console.log(d);
console.log(rest);

var courser = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
};

// var {name, price, image} = courser;
var {name, ...res} = courser;

console.log(name, res);

var courser = {
    name : 'Javascript',
    price : 1000,
    image : 'image-address',
    children : {
        name : 'ReactJS'
    }
}

var {name: parentName, children: {name: childrenName}, description = "default description"} = courser;

console.log(parentName);
console.log(childrenName);
console.log(description);

function logger(...params) {
    console.log(params);
}

console.log(logger(06,554,56,43,56));