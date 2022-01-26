
//Toggle error handler
function rederError(){
    
    let errorText = document.getElementById('error');
    errorText.innerHTML = "Something went wrong, please try again";

    if (errorText.style.display !='block'){
        errorText.style.display = 'block';
    }else{
        errorText.style.display = 'none';
    }
}