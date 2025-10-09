import {isValidUsername} from "6pp";
export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function validatePassword(password) {
    return password.length >= 6;
}
export function usernameValidator(username) {
    if(!isValidUsername(username))
    return {isValid:false,errorMessage:"username is invalid"};
}