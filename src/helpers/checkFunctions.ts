export const checkPassword = (password: string) => {
    let result = 'easy'; 
    if ( password.length < 8) {
        result = `low`
    } 
    else if ( 
        password.match(/[a-zA-Z]/) &&
        password.match(/[0-9]/) &&
        password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
    ) {
        result = 'strong'
    } 
    else if (
        (password.match(/[a-zA-Z]/) && password.match(/[0-9]/)) ||
        (password.match(/[a-zA-Z]/) && password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) ||
        (password.match(/[0-9]/) && password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/))
    ) {
        result = 'medium';
    }
        
    return result
};