function accountLogin(){

    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('username');
    let userPw = document.getElementById('password');


    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}