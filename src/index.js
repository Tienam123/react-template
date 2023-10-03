import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/styles.scss';
import { Header } from './pages/Header/Header';
import { Main } from './pages/Main/Main';
import { Sidebar } from './pages/Sidebar/Sidebar';
import { Footer } from './pages/Footer/Footer';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <div className="container">
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </div>,
);
