import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/valiate";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    let [isSignIn , setIsSignIn] = useState(true)
    const [errorMessage ,setErrorMessage] =useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const navigate = useNavigate();
const toggelToSignIn =()=>{
    setIsSignIn((pre)=>!pre)
}  

const handleOnSubmit =()=>{
  
 let Message =  checkValidateData(email.current.value,password.current.value )
setErrorMessage(Message)
if (Message!==null) return;


if (isSignIn) {
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential.user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + errorMessage)
    // ..
  });
}else{
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
     navigate("/browse")
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });
}

}
  return (
    <div className=" relative">
      <Header />

      <div className="relative">


        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg"
            alt="Netflix-background-image"
          />
        </div>

     <div className="w-full absolute  flex justify-center  top-1/8">
           <form  onSubmit={(e)=>e.preventDefault()} action="" className="bg-black rounded-lg opacity-88 w-[26%] px-10 py-8 flex flex-col text-white   ">
           <h1 className="font-bold text-3xl py-4 ">{isSignIn?"Sign Up":"Sign In"}</h1>

           {
              isSignIn&&
          <input ref={name}  type="text" placeholder="Full Name " className="p-4 m-2 bg-zinc-900 bg-opacity-50 text-white  border-[1px] border-white outline-none  rounded-sm  placeholder:text-white  text-md placeholder:opacity-70"  />

           }
          <input  ref={email}  type="email" placeholder="Email Address" className=" text-white p-4 m-2 bg-zinc-900 bg-opacity-50  border-[1px] border-white outline-none  rounded-sm text-md placeholder:text-white placeholder:opacity-70"  />


          <input ref={password} 
            type="password"
            placeholder="Password"
            className="p-4 m-2 border-[1px] text-md outline-none border-white text-white rounded-sm bg-zinc-900 bg-opacity-50 placeholder:opacity-70 placeholder:text-white"
          />
    <p className="text-red-700 ml-3 font-semibold mt-2    capitalize ">{errorMessage}</p>
             <button
             onClick={handleOnSubmit}
             className="bg-red-700 px-4  py-2 rounded-sm  cursor-pointer  m-2 text-lg font-semibold">
             {isSignIn?"Sign Up":"Sign In"}</button>
           
    <p 
    onClick={toggelToSignIn}
    className="py-4 ml-3 font-semibold cursor-pointer">{isSignIn?"Already registered ?  Sign In Now.":"New to Netflix ? Sign Up Now"}</p>
        </form>
     </div>
      </div>
    </div>
  );
};

export default Login;
