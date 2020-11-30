//selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

//event handler
form.addEventListener('submit',function(e){
    e.preventDefault();// data will not submit to the server
    checkInputs();
});


//functions
function checkInputs(){
const usernameValue = username.value.trim(); //username ke input m jo value lenge woh aa jayegi
const emailValue = email.value.trim();
const password1Value = password1.value.trim();
const password2Value = password2.value.trim();

if(usernameValue ===''){
showError(username,"UserName can Not be Blank");
}
else{
    showSuccess(username);
}


if(emailValue ===''){
    showError(email,"Email-ID can Not be Blank");
    }
    else if(!isEmailValid(emailValue)){
        showError(email,"Email is not Valid");
    }
    else{
        showSuccess(email);
    }

    if(password1Value ===''){
        showError(password1," Password can Not be Blank");
        }
        else{
            showSuccess(password1);
        }
        if(password2Value ===''){
            showError(password2,"Password Cannot be blank");
            }
            else if(password2Value!=password1Value){
                showError(password2,"Password not match"); 
            }
            else{
                showSuccess(password2);
            }


}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');//error msg ke liye h yh statement
    small.innerHTML = msg;
}
function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
    
}
function isEmailValid(email){
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})$/.test(email);
}