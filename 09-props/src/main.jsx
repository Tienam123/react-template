import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import PetInfo from './component/PetInfo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <PetInfo name="Benya" age="2"/>
    <PetInfo name="Vasya" age="3"/>
    </>
  </React.StrictMode>
);
