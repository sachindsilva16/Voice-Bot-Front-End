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
            
            <HeroContainer/>

            <img src={waveImage} alt="" className="vector-image" />



        </div>

        // <div className="flex flex-row justify-between items-center md:space-x-10 px-6 py-8">

        // </div>
    );
}

export default App;