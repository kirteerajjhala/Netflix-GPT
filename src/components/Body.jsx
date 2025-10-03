import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from "../components/Browse"
import Login from "../components/Login"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
const Body = () => {
const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element:<Login/>

        },
        {
            path : "/browse",
            element:<Browse/>
        }
    ])

 onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid , email ,displayName } = user;
    dispatch(addUser({uid ,email ,displayName}))
   
  } else {
    dispatch(removeUser());
  }
});   
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body