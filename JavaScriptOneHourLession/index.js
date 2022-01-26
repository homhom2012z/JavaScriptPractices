//Text toggle function
function toggle(){

    let textValue = document.getElementById('text');

    if(textValue.innerHTML === 'Hello World'){
        textValue.innerHTML = 'Text value changed by toggle function';
    }else{
        textValue.innerHTML = 'Hello World';
    }

    console.log('Function working perfectly.');

}