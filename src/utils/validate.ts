

export const validateData = (email:string, password:string) => {

    const isEmailValid =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid = password.length > 6

    if(!isEmailValid){
        throw new Error(`${email} is incorrect email`)
    }

    if(!isPasswordValid){
        throw new Error('Password is incorrect')
    }

    return true
}

