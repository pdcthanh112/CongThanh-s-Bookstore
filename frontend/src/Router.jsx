import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./common/auth/login/Login";
import Register from "./common/auth/register/Register";
import BookDetail from "./common/components/user/book/bookDetail/BookDetail";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
