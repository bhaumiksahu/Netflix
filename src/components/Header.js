 import img1 from "../images/Netflix_Logo_PMS (1).png"
 import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { addUser, removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import {useSelector} from "react-redux"
const Header = () => {
  const dispatch=useDispatch();  
  const navigate=useNavigate(); 
  const user=useSelector((store)=>store.user);
  const handlesignout = () =>{
    signOut(auth).then(() => {
     }).catch((error) => {
       // An error happened.
     });
    }
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
            navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
  },[])
  return (
   <div className="z-30 absolute bg-gradient-to-b from-black w-full flex justify-between">
     <img className=" h-24  p-4" src={img1} alt=""  />
     {user && <div className="flex flex-row-reverse gap-2 z-50 h-8 mt-7 mr-4">

                <button onClick={handlesignout}>Sign out</button>
                <img src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQXszFsiBJ2Y81waNSw-M-KQg9JO-olWpvqRzQZ0eI1v868HMGau4lMbpxDh0GVTjoq_bl-99F-mQTLm-Z-EgY7oUEzLDfg.png?r=bd3" alt=""/>
                
     </div>}
   </div>
  )    
}
export default Header;