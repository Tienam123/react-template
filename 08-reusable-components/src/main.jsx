import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import MyComponent from './components/MyComponent.jsx';
import OtherComponent from './components/OtherComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <MyComponent />
      <OtherComponent/>
    </>
  </React.StrictMode>
);

