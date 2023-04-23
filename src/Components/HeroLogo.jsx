import React from "react";
import { Logo } from "../image";


function HeroLogo() {
    return (
        <div>
            <img src={Logo} alt="" className="Logo hover:-translate-y-1 duration-300" />
        </div>
    );
}

export default HeroLogo;