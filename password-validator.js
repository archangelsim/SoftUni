function passwordValidator(enteredPassword) {

    let valid = false;
    let lengthOK = false;
    let lettersAndDigitsOnly = false;
    let minimumDigits = false;

    if (enteredPassword.length >= 6 && enteredPassword.length <= 10) {
        lengthOK = true;
    }
    if (/^[A-Za-z0-9]*$/.test(enteredPassword)) {
        lettersAndDigitsOnly = true;
    }
    if (enteredPassword.replace(/[^0-9]/g, '') >= 2) {
        minimumDigits = true;
    }

    if (lengthOK && lettersAndDigitsOnly && minimumDigits) {
        valid = true;
    }

    if (valid) {
        console.log("Password is valid")
    }
    if (!lengthOK) {
        console.log("Password must be between 6 and 10 characters")
    } 
    if (!lettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits")
    } 
    if (!minimumDigits) {
        console.log("Password must have at least 2 digits")
    } 

}

passwordValidator('Pa$s$s')