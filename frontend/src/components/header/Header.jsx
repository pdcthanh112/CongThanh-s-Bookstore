import React from "react";
import Navbar from "../navbar/Navbar";

import "./header.scss"

const Header = () => {
    return (
        <div className="header">
            <div  style={{width: '90%'}}> 
                <h2>CongThanh's Bookstore</h2>
            </div>
           <Navbar style={{width: '20%'}}/>
        </div>
    )
}

export default Header;