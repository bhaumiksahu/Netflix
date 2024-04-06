
const VideoTitle= ({title,overview}) =>{
    return(
     <div className="flex flex-col justify-center">
         <h1 className="ml-7 mt-40 font-[Poppins] text-4xl w-[300px]">{title}</h1>
         <p className="mt-8 w-[600px] ml-7">{overview}</p>
         <div>
            <button className="border mt-6 ml-7 rounded-md px-5 py-2 text-xl bg-slate-200"><i class="fa-solid fa-play"></i> Play</button>
            <button className="ml-7 mt-4 border-2 rounded-md px-5 py-2 text-xl bg-slate-100 opacity-90"><i class="fa-solid fa-circle-info"></i> More Info</button>
         </div>
     </div>
    )
 }
 export default VideoTitle;