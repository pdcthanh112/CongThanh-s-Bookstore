exports.validate = (username, password, confirmPassword) => {
    if(!username || !password || !confirmPassword) {
        return 'Please input all field'
    }

    if(password.length < 6) {
        return 'Password must be at least 6 characters'
    }

    if(password != confirmPassword) {
        return 'Confirm password did not match'
    }
} 

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email)
}