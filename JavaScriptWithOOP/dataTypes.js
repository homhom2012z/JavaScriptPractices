
let x = { value: 10};
let y = x;

x.value= 20;

console.log('x ' + x);
console.log('y: ' + y);


let number = { value: 10};

function increase(number){
    number.value++;
}

increase(number);

//Object references by reference
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

//Add new value or new Func to Reference function
circle.location = { x: 1, y: 1}; //Add location with x value

//Access key by properties
for(let key in circle){
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);

if('radius' in circle){
    console.log('Circle has a radius property.');
}