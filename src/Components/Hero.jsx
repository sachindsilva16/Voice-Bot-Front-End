import React from "react";
import HeroMenuContainer from "./Hero-MenuContainer";
import HeroLogo from "./HeroLogo"
import HeroHeading from "./HeroHeading";

function HeroContainer(props) {
    return (
        <div className={props.className} >


            {/* Menu / Logo Container  */}

                {/* Logo  */}

                <HeroLogo/>


            {/* Title of the Container  */}
            <HeroHeading/>


            {/* Menu Container  */}

            <HeroMenuContainer/>


            {/* Wave Vector Background Image  */}
        </div >
    );
}

export default HeroContainer;