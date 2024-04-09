import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import {useSelector} from "react-redux"
const Browse = () => {
    const toggleans=useSelector((store)=>store.gpt.showGptSearch)
    useNowPlayingMovie();
    usePopularMovies();
    useTopRatedMovies();
    useUpcoming();
    return (
        <div>         
            <Header/>
            {toggleans?(<GptSearch/>)
            :
            (<><MainContainer/>
            <SecondaryContainer/></>)}
        </div>
    )
}
export default Browse;