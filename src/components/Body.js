import Login from "./Login"
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
    const dispatch=useDispatch();
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayname} = user;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayname:displayname,
              }))
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    },[])
    return (
        <div>
          <RouterProvider router={AppRouter}/>  
        </div>
    )
}
export default Body;