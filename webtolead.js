const companyName = document.querySelector('#company');
const firstname = document.querySelector('#first_name');
const lastname = document.querySelector('#last_name');
const emailaddress = document.querySelector('#email');
const phonenumber = document.querySelector('#phone');

var form = document.querySelector('.leadinterest');

const checkCompanyName = () => {

    let valid = false;

    const min = 3, max = 25;

    const company = companyName.value.trim();

    if (!isRequired(company)) {
        showError(companyName, 'The name of company cannot be blank.');
    } else if (!isBetween(company.length, min, max)) {
        showError(companyName, `The name of company must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(companyName);
        valid = true;
    }
    return valid;
};

const checkFirstName = () => {

    let valid = false;

    const min = 3, max = 25;

    const fname = firstname.value.trim();

    if (!isRequired(fname)) {
        showError(firstname, 'First name cannot be blank.');
    } else if (!isBetween(fname.length, min, max)) {
        showError(firstname, `First name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(firstname);
        valid = true;
    }
    return valid;
};

const checkLastName = () => {

    let valid = false;

    const min = 3, max = 25;

    const lname = lastname.value.trim();

    if (!isRequired(lname)) {
        showError(lastname, 'Last name cannot be blank.');
    } else if (!isBetween(lname.length, min, max)) {
        showError(lastname, `Last name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(lastname);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;

    const email = emailaddress.value.trim();

    if (!isRequired(email)) {
        showError(emailaddress, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailaddress, 'Email is not valid.');
    } else {
        showSuccess(emailaddress);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;

    const phone = phonenumber.value.trim();

    if(!isRequired(phone)) {
        showError(phonenumber, 'Phone cannot be blank.');
    } else if(!isPhoneValid(phone)) {
        showError(phonenumber, 'Phone is not valid.');
    } else {
        showSuccess(phonenumber);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPhoneValid = (phone) => {
    const rev = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    return rev.test(phone);
};

const showError = (input, message) => {
    const mb3 = input.parentElement;
    mb3.classList.remove('success');
    mb3.classList.add('error');

    const error = mb3.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const mb3 = input.parentElement;

    mb3.classList.remove('error');
    mb3.classList.add('success');

    const error = mb3.querySelector('small');
    error.textContent = '';
};

function validateForm() {

    let isCompanyNameValid = checkCompanyName(),
        isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone();

    console.log(isCompanyNameValid);

    
    let isFormValid = isCompanyNameValid && isFirstNameValid && isLastNameValid && 
    isEmailValid && isPhoneValid;

    return isFormValid;
};

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'company':
            checkCompanyName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'last_name':
            checkLastName();
            break;
        case 'first_name':
            checkFirstName();
            break;
        case 'phone':
            checkPhone();
    }
}));







