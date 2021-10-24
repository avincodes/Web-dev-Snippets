function validation()
{
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var mobile = document.getElementById('mobile').value;
	var add1 = document.getElementById('add1').value;
	var add2 = document.getElementById('add2').value;
	var text = document.getElementById('text').value;

	var namecheck = /^[a-zA-Z]{2,30}$/;
	var emailcheck = /^[a-zA-Z0-9]{3,}[@]{1}[a-z]{3,}[.]{1}[a-zA-Z]$/;
	var mobilecheck = /^[0-9]{10}$/;
	var add1check = /^[a-zA-Z0-9]{2,30}$/;
	var add2check = /^[a-zA-Z0-9]{2,30}$/;
	var textcheck = /^[a-zA-Z0-9!@#$%^&*_+-]{2,30}$/;



	if(namecheck.test(name))
	{
		document.getElementById('nameerror').innerHTML = "";
	}
	else
	{
		document.getElementById('nameerror').innerHTML = "Invalid name";
		return false;
	}	


	if(emailcheck.test(email))
	{
		document.getElementById('emailerror').innerHTML = "";
	}
	else
	{
		document.getElementById('emailerror').innerHTML = "Invalid email";
		return false;
	}	


	if(mobilecheck.test(mobile))
	{
		document.getElementById('mobileerror').innerHTML = "";
	}
	else
	{
		document.getElementById('mobileerror').innerHTML = "Invalid Number";
		return false;
	}	


	if(add1check.test(add1))
	{
		document.getElementById('add1error').innerHTML = "";
	}
	else
	{
		document.getElementById('add1error').innerHTML = "Invalid Address";
		return false;
	}	


	if(add2check.test(add2))
	{
		document.getElementById('add2error').innerHTML = "";
	}
	else
	{
		document.getElementById('add2error').innerHTML = "Invalid Address";
		return false;
	}	


	if(textcheck.test(text))
	{
		document.getElementById('texterror').innerHTML = "";
	}
	else
	{
		document.getElementById('texterror').innerHTML = "Invalid text";
		return false;
	}	





}
