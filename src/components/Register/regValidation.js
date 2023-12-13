export default function Validation(values) {
    const errors = {};

    const whitspace_pattern = /\s+/
    const username = /^[a-zA-Z0-9]{5,}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;
    // 1 digit, 1 small car., 1 capt. car., 

    if (values.username === '') {
        errors.username = 'Username is required!';
    } else if (!username.test(values.username)) {
        errors.username = 'Username is not correct!';
        values.username = ''
    }


    if (values.email === '' ) {
        errors.email = 'Email is required!';
    } else if (!email_pattern.test(values.email)) {
        errors.email = 'This is not a valid email format!';
        values.username = ''
    }


    if (values.password ==='') {
        errors.password = 'Password is required!';
    } else if (!password_pattern.test(values.password)) {
        errors.password = 'Password is invalid!';
    }

    // if(!whitspace_pattern.test(values.repass)){
    //     errors.repass = 'Re-pass is required!';
    // }

    if(values.password !== values.repass ){
        errors.repass = 'Passwords don\'t match!';
    }

    return errors;
}