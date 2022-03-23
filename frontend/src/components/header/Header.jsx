import React from "react";
import "./header.scss"
import Navbar from "../navbar/Navbar";


const Header = () => {


   

    return (
        <div className="header">
            <div style={{ width: '90%' }}>
                <div className="header__logo" onClick="location.href='/'"></div>
                
            </div>
            <Navbar style={{ width: '20%' }} />
        </div>
    )
}

export default Header;