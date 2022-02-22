import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;