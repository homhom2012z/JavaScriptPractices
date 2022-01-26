
// //Factory Function
// function createCircle(radius, location){
//     return {
//         radius, //if same variable name: radius: radius = radius
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

//Constructure Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

//Create an Object by reference to circle created method(Function)
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function(){
//     console.log('draw');
// }
// `);

// const circle = new Circle1(1);
// circle.draw();

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
another.draw();

// circle.draw();
