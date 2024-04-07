import Moviecard from "./Moviecard";

const Movielist=({title,movies})=>{
     console.log(movies)
     if (!movies) {
        return <div>Loading...</div>;
      }
     const mainmovie=movies[0];
    return(
        <div>
           <div>
              <h1>{title}</h1>
              <div>
              {mainmovie && <Moviecard poster={mainmovie.backdrop_path} />}
              </div>
           </div>
        </div>
    )
}
export default Movielist;