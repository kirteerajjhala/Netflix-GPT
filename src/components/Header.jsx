import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
const navigate = useNavigate()
const user = useSelector((state)=>state.user)

const handleSignOut =()=>{
signOut(auth).then(() => {
  console.log("auth : " ,auth)
  navigate("/")
}).catch((error) => {
  console.error("Sign out error:", error);
});
}  
  return (
    <div className=' w-full  z-50 absolute px-10 py-8 flex justify-between items-center  bg-gradient-to-b from-black'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"  className='w-[12vw]'/>

      <div>
        <button onClick={handleSignOut} className='bg-red-600 cursor-pointer text-white px-4 rounded-md py-2 font-semibold '>Sign Out</button>
      </div>
    </div>
  )
}

export default Header