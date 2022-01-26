
function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    
    this.draw = function(){
        // defaultLocation
        // this.radius
        
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y){
                throw new Error('Invalid location.');
            }

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
//Invalid input parameter
circle.defaultLocation = 1;
//Valid input
// circle.defaultLocation = { x:1, y:2};
circle.draw();
