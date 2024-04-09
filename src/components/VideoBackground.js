import {useSelector} from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({movieId}) =>{
   const trailerVideo=useSelector(store=>store.movies?.trailer);
   useMovieTrailer(movieId);
   return(
    <div className="pointer-events-none">
      <iframe 
       className="w-[100%] aspect-video" 
        src={"https://www.youtube.com/embed"+trailerVideo?.key +"?&rel=0&autoplay=1&mute=1&controls=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
      </iframe>
    </div>
   )
}
export default VideoBackground;