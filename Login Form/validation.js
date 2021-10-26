function validation(){
    var email = document.getElementById('emailId').value;
    var emailCheck = /^[A-Za-z0-9_]{3,}[@][a-z][.][A-Za-z]{2,6}$/;
}
if(!emailCheck.test(email)){
    document.getElementById('emailError').innerHTML="Invalid Email Id"
}