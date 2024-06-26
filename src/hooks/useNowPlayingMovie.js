import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import {useDispatch} from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovie = () =>{
    const dispatch=useDispatch();
    const NowPlayingMovies= async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results))
    }   
    useEffect(()=>{
        NowPlayingMovies();
    },[])
}
export default useNowPlayingMovie;