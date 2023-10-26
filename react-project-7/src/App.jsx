import React from 'react';
import Header from './pages/Header/Header.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import Community from './pages/Community/Community.jsx';
import Resources from './pages/Resources/Resources.jsx';
import About from './pages/About/About.jsx';
import Welcome from './pages/Welcome/Welcome.jsx';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage.jsx';
import Sidebar from './pages/Sidebar/Sidebar.jsx';
import Footer from './pages/Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Sidebar/>
     <Footer/>

    </>
  );
};

export default App;
