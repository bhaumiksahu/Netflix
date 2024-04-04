import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [sign,setsign]=useState([true]);
    const togglesign=()=>{
      setsign(!sign);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
              <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
            </div>
            <div className="relative flex flex-col  top-36 bg-black bg-opacity-90 p-12 h-[470px] w-[390px] left-[28rem] rounded-lg">
                <h2 className="text-white font-bold text-4xl">{sign?"Sign in":"Sign up"}</h2>
                <form className="flex flex-col mt-8">
                {   (!sign) &&
                    (<input className="mb-6 text-sm text-white p-4 rounded-md bg-gray-800 bg-opacity-65" type="text" placeholder="enter your name"/>)
                }
                

                <input  className="mb-8 text-sm text-white p-4 rounded-md bg-gray-800 bg-opacity-65" type="email" placeholder="enter your email" />

                <input className="mb-8 text-sm text-white p-4 rounded-md bg-gray-800 bg-opacity-65" type="password" placeholder="enter password"/>

                <button className="bg-red-800 p-3 rounded-md text-xl font-semibold text-white mb-4">{sign?"Sign in":"Sign up"}</button>
                <p className="text-white text-sm ml-1 cursor-pointer hover:underline" onClick={togglesign}>{sign?"New to Netfilx ? Sign up now":"Already registered ? Sign in now"}</p>
            </form>
            </div>
        </div>
    )
}
export default Login;