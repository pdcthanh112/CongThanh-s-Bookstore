import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/core/Home";

const Router = () => {
    return (
        <BrowserRouter>       
            <Routes>          
                <Route path="/"  element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;