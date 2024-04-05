import Header from "./Header";
import { signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom";
const Browse = () => {
    const navigate=useNavigate();
        const handlesignout = () =>{
         signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="flex justify-between">         
            <div><Header/></div>
            <div className="relative flex flex-row-reverse items-center gap-2 m-7 z-50">

                <button onClick={handlesignout}>Sign out</button>
                <img src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQXszFsiBJ2Y81waNSw-M-KQg9JO-olWpvqRzQZ0eI1v868HMGau4lMbpxDh0GVTjoq_bl-99F-mQTLm-Z-EgY7oUEzLDfg.png?r=bd3" alt=""/>
                
            </div>
        </div>
    )
}
export default Browse;