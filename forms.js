// Getting Contact Form Values
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('p_num');
const message = document.getElementById('message');
var firstNameValid = null;
var lastNameValid = null;
var emailValid = null;
var phoneNumberValid = null;

// Start Validator
firstName.addEventListener('keyup', function(){
    nameValue = firstName.value;
    if (nameValue.match(/^[A-Za-z]*$/)) {
        firstName.style.backgroundColor = 'rgb(185, 206, 154)';
        firstNameValid = true;
    }
    else {
        firstName.style.backgroundColor = 'red';
        firstNameValid = false;
    }
})

lastName.addEventListener('keyup', function(){
    lastNameValue = lastName.value;
    if (lastNameValue.match(/^[A-Za-z]*$/)) {
        lastName.style.backgroundColor = 'rgb(185, 206, 154)';
        lastNameValid = true;
    }
    else {
        lastName.style.backgroundColor = 'red';
        lastNameValid = false;
    }
})

email.addEventListener('keyup', function(){
    emailValue = email.value;
    if (emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        email.style.backgroundColor = 'rgb(185, 206, 154)';
        emailValid = true;
    }
    else {
        email.style.backgroundColor = 'red';
        emailValid = false;
    }
})

phoneNumber.addEventListener('keyup', function(){
    phoneValue = phoneNumber.value;
    if (phoneValue.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        phoneNumber.style.backgroundColor = 'rgb(185, 206, 154)';
        phoneNumberValid = true;
    }
    else {
        phoneNumber.style.backgroundColor = 'red';
        phoneNumberValid = false;
    }
})

isValid = () => {
    if (phoneNumberValid && emailValid && firstNameValid && lastNameValid && (message.value !== '')) {
        alert("Thank you for Contacting Us! a response will be sent to your email within 1-3 business days.");
    }
    else {
        alert("Please enter valid responses")
    }
}

// End Validator