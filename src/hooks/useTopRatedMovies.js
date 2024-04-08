import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch} from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () =>{
    const dispatch=useDispatch();
    const TopRatedMovies= async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json)
    dispatch(addTopRatedMovies(json.results))
    }   
    useEffect(()=>{
        TopRatedMovies();
    },[])
}
export default useTopRatedMovies;
