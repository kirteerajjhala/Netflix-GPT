export const checkValidateData =  (email,password)=>{

const isEmailCorrect = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isPasswordCorrect = /^(?=.*\d).{6,}$/.test(password)
// const isNameCorrect = /^[A-Za-z ]{3,30}$/.test(name)


if (!isEmailCorrect) {
    return "Email Id is not valid"
}
if (!isPasswordCorrect) {
    return "Password is not valid"
}

//  if (isSignIn && !isNameCorrect) {
//     return "Name is not valid"
// } 

// if (isSignIn && !isNameCorrect) {
//     return "Name is not valid"
// }
return null
}