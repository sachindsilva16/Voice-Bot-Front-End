import React from "react";
import { Logo } from "../image";

function HeroContainer() {
    return (
        <div className="relative flex flex-row space-x-4 md:space-x-10 items-center max-w-6xl md:max-w-full px-6 py-4 md:py-8 md:pl-20 bg-gradient-to-r from-violet-700 via-indigo-600 to-blue-600" >


            {/* Menu / Logo Container  */}

            {/* Logo  */}


            <div>
                <img src={Logo} alt="" className="Logo" />
            </div>


            {/* Title of the Container  */}
            <div className="font-bold flex flex-col text-white space-y-1">

                {/* Upper Line Text */}

                <div className="font-light text-xl md:text-3xl">Experience the </div>


                {/* Lower Line Text*/}
                <div className="font-medium text-2xl md:text-5xl">Future of Browsing</div>

            </div>


            {/* Menu Container  */}

            <div className="flex flex-row space-x-6 justify-between items-center md:space-x-8">


                {/* Three Dot Container  */}
                <div className="w-6 h-6 invert absolute right-20 md:right-[250px] md:w-10 md:h-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="dots"><path d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402 2.2 2.2 0 0 0 0-4.402z"></path></svg>
                </div>

                {/* Drop-Down Arrow Container  */}

                <div className="absolute right-5 md:right-[120px] invert w-12 h-12 md:w-20 md:h-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
                </div>


            </div>


            {/* Wave Vector Background Image  */}
        </div >
    );
}

export default HeroContainer;