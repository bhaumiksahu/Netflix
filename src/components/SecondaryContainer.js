import Movielist from "./Movielist";
import {useSelector} from "react-redux"

const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    return(
        <div>
           <Movielist title={"Now"} movies={movies.nowPlayingMovies}/>
        </div>
    )
}
export default SecondaryContainer;