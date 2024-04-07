import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();
    
    const getVideo =async () => {
       
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+ 
        "/videos?language=en-US", API_OPTIONS);

        const json = await data.json();
        const filtertrailer=json.results.filter((video)=>video.type==="Trailer");
        const trailer=filtertrailer.length?filtertrailer[0]:json.results[0];
        dispatch(addTrailer(trailer));
  }
    useEffect(()=>{
        getVideo();
    },[]);
}
export default useMovieTrailer;