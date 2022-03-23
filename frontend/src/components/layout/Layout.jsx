import React from "react";
import './layout.scss'
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ className, children }) => {
    return (
        <div>
            <div className="header__image"></div>
            <Header />
            <div className="layout">
                <div className={className}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;