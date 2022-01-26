
// document.getElementById('count-el').innerHTML;

//Count of variable(People entered)
let count = 0;

//Increment Function
function increment(){
    count++;
    
    document.getElementById('count-el').innerHTML = count;
}

function save(){
    console.log(count);
    document.getElementById('save-el').textContent += count + ' - ';
    document.getElementById('count-el').innerHTML = 0;
    count = 0;
}
