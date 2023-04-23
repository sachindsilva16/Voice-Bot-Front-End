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

            {/* Three Dot Container  */}

            {/* Drop-Down Arrow Container  */}


            {/* Wave Vector Background Image  */}
        </div >
    );
}

export default HeroContainer;