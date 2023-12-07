export default function Validation(values){
    const errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/
                    // 1 digit, 1 small car., 1 capt. car., 

    if(values.email == ''){
        errors.email = 'Email is required!';
    } else  if(!email_pattern.test(values.email)){
        errors.email = 'Email is not correct!'
    } 


    if(values.password == ''){
        errors.password = 'Password is required!';
    } else  if(!password_pattern.test(values.password)){
        errors.password = 'Password don\'t match!'
    } 

    return errors;
}