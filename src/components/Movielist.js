import Moviecard from "./Moviecard";

const Movielist=({title,movies})=>{
     if (!movies) {
        return <div>Loading...</div>;
      }
    return(
        <div className=" bg-transparent">
           <h1 className=" ml-4 text-[1.2rem] text-white mb-2">{title}</h1>
           <div className="ml-4 flex overflow-x-scroll">
              <div className="flex gap-2 mb-6">
              {movies.map((movie)=>{return(<Moviecard key={movie.id} poster={movie.backdrop_path} title={movie.title}/>)})}
              </div>
           </div>
        </div>
    )
}
export default Movielist;