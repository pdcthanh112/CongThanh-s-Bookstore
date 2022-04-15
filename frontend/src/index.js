import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import stores from "./redux/stores";
import Router from "./Router";


ReactDOM.render(
   <React.StrictMode>
     <Provider store={stores}>  
        <Router />  
    </Provider>
   </React.StrictMode>,
  document.getElementById("root")
);
