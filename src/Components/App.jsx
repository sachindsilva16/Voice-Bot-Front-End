import React from "react";
import waveImage from "../image";
import { Logo } from "../image";
import HeroContainer from "./Hero";
// import wave from "../../public/bg-wave-vector.png"

function App() {
    return (
        // ----- Main Container -----
        <div>


            {/* Hero Container  */ }
            
            <HeroContainer className="relative flex flex-row space-x-4 md:space-x-10 items-center max-w-6xl md:max-w-full px-6 py-4 md:py-8 md:pl-20 bg-gradient-to-r from-violet-700 via-indigo-600 to-blue-600"/>

            <img src={waveImage} alt="" className="vector-image" />
            


            {/* Chat Container  */}


        </div>

    );
}

export default App;