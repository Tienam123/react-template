import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import PetInfo from './components/PetInfo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <PetInfo hasPet age={10} animal={'Cat'}/>
    <PetInfo hasPet={false} age={20} animal={'Dog'}/>
    </>
  </React.StrictMode>
);
