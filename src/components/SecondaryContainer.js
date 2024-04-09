import Movielist from "./Movielist";
import {useSelector} from "react-redux"

const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    return(
        <div className="bg-black">
           <div className="relative -mt-40">
           <Movielist title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>         
           <Movielist title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>
           <Movielist title={"Popular Movies"} movies={movies.PopularMovies}/>
           <Movielist title={"Upcoming Movies"} movies={movies.Upcoming}/>
        </div>
        </div>
    )
}
export default SecondaryContainer;