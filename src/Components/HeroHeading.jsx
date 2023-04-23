import React from "react";

function HeroHeading() {
    return (
        <div className="font-bold flex flex-col text-white space-y-1 select-none">

            {/* Upper Line Text */}

            <div className="font-light text-xl md:text-3xl">Find Your </div>


            {/* Lower Line Text*/}
            <div className="font-medium text-2xl md:text-5xl">Way With Ease</div>

        </div>
    );
}

export default HeroHeading;