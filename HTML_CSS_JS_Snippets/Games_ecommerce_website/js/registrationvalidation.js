function validation()
{
	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var number = document.getElementById('Number').value;
	var email = document.getElementById('email').value;
	var hno = document.getElementById('H.no').value;
	var area = document.getElementById('area').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var country = document.getElementById('country').value;
	var password = document.getElementById('password').value;
	var conpassword = document.getElementById('conpassword').value;


	var namecheck = /^[a-zA-Z]{3,26}$/;
	var agecheck = /^[18-100]{2,3}$/;
	var numbercheck = /^[0-9]{10}$/;
	var emailcheck = /^[a-zA-Z0-9_]{3,}[@]{1}[a-z]{2,}[.]{1}[a-zA-Z]{2,6}$/;
	var hnocheck = /^[a-zA-Z0-9]{1,26}$/;
	var areacheck = /^[a-zA-Z]{1,26}$/;
	var citycheck =/^[a-zA-Z]{1,26}$/;
	var statecheck = /^[a-zA-Z]{1,26}$/;
	var countrycheck = /^[a-zA-Z]{1,26}$/;
	var passwordcheck = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/;
	var conpasswordcheck = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/;

	if(namecheck.test(name))
	{
		document.getElementById('nameerror').innerHTML="";
	}
	else
	{
		document.getElementById('nameerror').innerHTML="Inavlid username. Max limit-26 characters";
		return false;

	}

	if(agecheck.test(age))
	{
		document.getElementById('ageerror').innerHTML="";
	}
	else
	{
		document.getElementById('ageerror').innerHTML="You must be 18+ to register";
		return false;

	}
	if(numbercheck.test(number))
	{
		document.getElementById('Numbererror').innerHTML="";
	}
	else
	{
		document.getElementById('Numbererror').innerHTML="Inavlid number";
		return false;

	}

	if(emailcheck.test(email))
	{
		document.getElementById('emailerror').innerHTML="";
	}
	else
	{
		document.getElementById('emailerror').innerHTML="Inavlid E-mail";
		return false;

	}

	if(hnocheck.test(hno))
	{
		document.getElementById('H.noerror').innerHTML="";
	}
	else
	{
		document.getElementById('H.noerror').innerHTML="Inavlid entry. Max limit-26 characters";
		return false;

	}

	if(areacheck.test(area))
	{
		document.getElementById('areaerror').innerHTML="";
	}
	else
	{
		document.getElementById('areaerror').innerHTML="Inavlid entry. Max limit-26 characters";
		return false;

	}

	if(citycheck.test(city))
	{
		document.getElementById('cityerror').innerHTML="";
	}
	else
	{
		document.getElementById('cityerror').innerHTML="Inavlid entry. Max limit-26 characters";
		return false;

	}

	if(statecheck.test(state))
	{
		document.getElementById('stateerror').innerHTML="";
	}
	else
	{
		document.getElementById('stateerror').innerHTML="Inavlid entry. Max limit-26 characters";
		return false;

	}

	if(countrycheck.test(country))
	{
		document.getElementById('countryerror').innerHTML="";
	}
	else
	{
		document.getElementById('countryerror').innerHTML="Inavlid entry. Max limit-26 characters";
		return false;

	}

	if(password.test(conpassword))
	{
		document.getElementById('passworderror').innerHTML="";
	}
	else
	{
		document.getElementById('passworderror').innerHTML="Password must contain atleast 8 characters,1 spl. character,1 upper and lower case and 1 number";
		return false;
	}

	if(conpasswordcheck.match(conpassword))
	{
		document.getElementById('conpassworderror').innerHTML="";
	}
	else
	{
		document.getElementById('conpassworderror').innerHTML="Passwords do not match";
		return false;

	}

	
}






            