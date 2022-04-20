import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import stores from "./app/stores";
import Router from "./Router";

ReactDOM.render(
   <React.StrictMode>
     <Provider store={stores}>  
        <Router />  
    </Provider>
   </React.StrictMode>,
  document.getElementById("root")
);
