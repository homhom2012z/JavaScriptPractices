
let result = document.getElementById('sum');

function calculate(id){

    let firstNumber = parseInt(document.getElementById('first').innerHTML);
    let secondNumber = parseInt(document.getElementById('second').innerHTML);

    if(id == 'add'){
        result.innerHTML = "Sum: " + (firstNumber + secondNumber);
    }else if(id == 'sub'){
        result.innerHTML = "Sum: " + (firstNumber - secondNumber);
    }else if(id == 'devide'){
        result.innerHTML = "Sum: " + (firstNumber / secondNumber);
    }else{
        result.innerHTML = "Sum: " + (firstNumber * secondNumber);
    }
}