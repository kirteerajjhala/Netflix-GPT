import React, { useState } from "react";
import Header from "./Header";
const Login = () => {

    let [isSignIn , setIsSignIn] = useState(true)


const toggelToSignIn =()=>{
    setIsSignIn((pre)=>!pre)
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

     <div className="w-full h-full absolute top-0 flex justify-center items-center">
           <form action="" className="bg-black opacity-85 w-[26%] px-10 py-8 flex flex-col text-white   ">
           <h1 className="font-bold text-3xl py-4 ">{isSignIn?"Sign Up":"Sign In"}</h1>

           {
              isSignIn&&
          <input type="text" placeholder="Full Name " className="p-4 m-2 bg-zinc-900 opacity-50  border-[1px] border-white outline-none  rounded-sm  placeholder:text-white placeholder:opacity-100"  />

           }
          <input type="email" placeholder="Email Address" className="p-4 m-2 bg-zinc-900 opacity-50  border-[1px] border-white outline-none  rounded-sm  placeholder:text-white placeholder:opacity-100"  />


          <input
            type="password"
            placeholder="Email Address"
            className="p-4 m-2 border-[1px] outline-none border-white rounded-sm bg-zinc-900 opacity-50 placeholder:opacity-100 placeholder:text-white"
          />

             <button className="bg-red-700 px-4  py-2 rounded-sm  m-2 text-lg font-semibold">{isSignIn?"Sign Up":"Sign In"}</button>
        
    <p 
    onClick={toggelToSignIn}
    className="py-4 ml-3 font-semibold cursor-pointer">{isSignIn?"Already registered ? Sign In Now.":"New to Netflix ? Sign Up Now"}</p>
        </form>
     </div>
      </div>
    </div>
  );
};

export default Login;
