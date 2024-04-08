import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcoming from "../hooks/useUpcoming";
const Browse = () => {
    useNowPlayingMovie();
    usePopularMovies();
    useTopRatedMovies();
    useUpcoming();
    return (
        <div>         
            <Header/>   
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browse;