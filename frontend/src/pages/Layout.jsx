import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ title = "Title", description = "Description", className, children }) => {
    return (
        <div>
            <Header/>       
            <div className="jumbotron">
                <h4>{title}</h4>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;