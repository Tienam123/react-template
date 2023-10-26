// enable Imports
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";
import Sidebar from "./pages/Sidebar/Sidebar";
import data from "./data/materials.json";
/* Codes Parts */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <Main />
    <Footer />
    <Sidebar />
  </div>
);
