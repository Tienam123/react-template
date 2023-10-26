/* Default imports */
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome.jsx';
import Community from './pages/Community/Community.jsx';
import Resources from './pages/Resources/Resources.jsx';
import About from './pages/About/About.jsx';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage.jsx';




// Code ...




ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index path="/" element={<Welcome/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Notfoundpage/>}/>
    </Route>
  </Routes>
</BrowserRouter>
);
