import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch} from "react-redux"
import { addUpcoming } from "../utils/movieSlice";
const useUpcoming = () =>{
    const dispatch=useDispatch();
    const Upcoming= async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json)
    dispatch(addUpcoming(json.results))
    }   
    useEffect(()=>{
        Upcoming();
    },[])
}
export default useUpcoming;
