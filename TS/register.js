function register() {

    // const newUser = {
    //     userName: document.getElementById('username').value,
    //     pw: document.getElementById('password').value,
    // }
    // if (userName.value.length == 0) {
    //     alert('Please fill in email');

    // } else if (pw.value.length == 0) {
    //     alert('Please fill in password');

    // } else if (userName.value.length == 0 && pw.value.length == 0) {
    //     alert('Please fill in email and password');

    // }
    // else{
    //     let currentUsers = JSON.parse(localStorage.getItem('users')) || [];
    //     currentUsers.push(newUser);
    //     document.getElementById('username').value = '';
    //     document.getElementById('password').value = '';
    //     localStorage.setItem('users', JSON.stringify(currentUsers));
    //     alert('Your account has been created');
    // }

    function register(){

        var name = document.getElementById('username');
        var pw = document.getElementById('password');

    
        if(name.value.length == 0){
            alert('Please fill in email');
    
        }else if(pw.value.length == 0){
            alert('Please fill in password');
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            alert('Please fill in email and password');
        }else{
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            alert('Your account has been created');
        }
    }
    
}

