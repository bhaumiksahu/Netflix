 import img1 from "../images/Netflix_Logo_PMS (1).png"
 import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { addUser, removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import {useSelector} from "react-redux"
import { toggleGptsearch } from "../utils/gptSlice";
import lang from "../utils/language";
import { Supp_lang } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch=useDispatch();  
  const navigate=useNavigate(); 
  const user=useSelector((store)=>store.user);
  const toggleans=useSelector((store)=>store.gpt.showGptSearch)
  const langkey=useSelector((store)=>store.config.lang);
  const [signout,setsignout]=useState(["Sign out"]);
  const handlesignout = () =>{
    signOut(auth).then(() => {
     }).catch((error) => {
       // An error happened.
     });
     
    }
  const handleGpt = () =>{
    dispatch(toggleGptsearch());
  }
  const handlelang = (e) =>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
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
     {user && <div className="flex flex-row-reverse gap-4 z-40 h-8 mt-7 mr-4">
        <button className="text-white "onClick={handlesignout} >
         Sign Out
        </button>
        
        <img src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQXszFsiBJ2Y81waNSw-M-KQg9JO-olWpvqRzQZ0eI1v868HMGau4lMbpxDh0GVTjoq_bl-99F-mQTLm-Z-EgY7oUEzLDfg.png?r=bd3" alt=""/>
        
        {toggleans && <div>
        <select className="text-white bg-transparent mt-[0.3rem] outline-none cursor-pointer" onChange={handlelang}>
         {Supp_lang.map((lang)=>(<option className="bg-slate-600" key={lang.identifier}>{lang.name}</option>))}
        </select>
        </div> }

        <button className="text-white hover:underline" onClick={handleGpt}>
          {toggleans?lang[langkey].home:"Need Help?"}
        </button>       
     </div>}
     
   </div>
  )    
}
export default Header;