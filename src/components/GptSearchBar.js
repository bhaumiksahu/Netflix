import lang from "../utils/language";

const GptSearchBar = () => {
    return(
        <div className="">
            <div className="absolute scale-1 opacity-95">
               <img className="z-0" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
            </div>
            <div className=" pt-[10%] text-center ml-[22%] scale-[1]">
               <form className="flex justify-between max-w-[700px]  rounded-[5rem]  border-2 border-black">
               <input className="w-full rounded-l-[5rem] outline-none text-lg p-4" type="text" placeholder={lang.hin.search}
               />
               <button className="text-lg text-white bg-red-600 p-4 rounded-r-[2rem]"><i class="fa-solid fa-magnifying-glass"></i></button>
               </form>
            </div>
        </div>
    )
  }
  export default GptSearchBar;