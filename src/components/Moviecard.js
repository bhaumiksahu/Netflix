import { IMG_CDN } from "../utils/constant";

const Moviecard=({poster})=>{
    console.log(IMG_CDN+poster)
    return(
        <div className="z-50">
            <img  src={IMG_CDN+poster} alt="" />
        </div>
    )
}
export default Moviecard;