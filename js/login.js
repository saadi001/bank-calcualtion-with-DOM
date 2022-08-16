document.getElementById('submit-btn').addEventListener('click',function(){
    
    const userEmail= document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    // THis is not the right way for taking checking valid or invalid email and password. we will do this server side 

    if(email === 'sheikhsadi1620@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid email or password!!')
    }
})