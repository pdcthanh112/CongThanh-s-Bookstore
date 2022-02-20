import React from "react";
import Navbar from "../navbar/Navbar";

import "./header.scss"

const Header = () => {
    return (
        <div className="top">
            <div className="left_side">
                <h2>CongThanh's Bookstore</h2>
            </div>
            <div className="right_side">
                <Navbar />
            </div>
        </div>
    )
}

export default Header;