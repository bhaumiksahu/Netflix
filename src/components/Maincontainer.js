import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer=()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(movies===null) return;
    const mainmovies=movies[0];
    const {title,overview}=mainmovies;
    return(
        <div>
           <VideoTitle title={title} overview={overview}/>
           <VideoBackground/>
        </div>
    )
}
export default MainContainer;