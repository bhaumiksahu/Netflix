import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch} from "react-redux"
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () =>{
    const dispatch=useDispatch();
    const PopularMovies= async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json.results))
    }   
    useEffect(()=>{
       PopularMovies();
    },[])
}
export default usePopularMovies;
