import { IMG_CDN } from "../utils/constant";

const Moviecard=({poster,title})=>{
    return(
        <div className="w-[250px] cursor-pointer hover:scale-[0.97] duration-300 ease-in">
            <img  src={IMG_CDN+poster} alt="" />
            <h1 className="text-white mt-2 ml-1"> {title}</h1>
        </div>
    )
}
export default Moviecard;