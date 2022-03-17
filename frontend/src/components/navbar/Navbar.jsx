import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <ul className="navList">
            <li className="navItem">
                <i className="fa-solid fa-house-user fa-xl navIcon"></i>
                <Link className="navLink" to="/">Home</Link>
            </li>
            <li className="navItem">
                <i class="fa-solid fa-address-card  fa-xl navIcon"></i>
                <Link className="navLink" to="/profile">Profile</Link>
            </li>
            <li className="navItem">
            <i class="fa-solid fa-cart-plus fa-xl navIcon"></i>
                <Link className="navLink" to="/cart">Cart</Link>
            </li>
            <li className="navItem">
            <i class="fa-solid fa-arrow-right-to-bracket fa-xl navIcon"></i>
                <Link className="navLink" to="/login">Login</Link>
            </li>
        </ul>
    )
}

export default Navbar;