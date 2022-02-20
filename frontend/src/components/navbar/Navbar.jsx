import React from "react";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Cart</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            <button>Register</button>
        </div>
    )
}

export default Navbar;