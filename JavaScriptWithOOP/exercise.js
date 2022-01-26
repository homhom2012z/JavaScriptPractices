
function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (!running){
            startTime = new Date();
            console.log('duration: '+duration);
            running = 1;
        }else{
            throw new Error('Stopwatch has already started.')
        }
    }
    
    this.stop = function(){
        if (running){
            endTime = new Date();
            duration += (endTime.getTime() - startTime.getTime())/1000;
            running = 0;
        }else{
            throw new Error('Stopwatch is not started.')
        }
        
    }

    this.reset = function(){
        startTime =null;
        endTime = null;
        running = 0;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        },
        set: function(value){
            duration = value;
        }
    })
    
}

// const stopwatch = new Stopwatch();