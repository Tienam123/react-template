import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.scss';
import {ThemeProvider} from '@emotion/react';

const theme = {
  colors: {
    colorWhite: '#fff',
    colorBlack: '#010101',
    colorGreen: '#4caf50',
    colorRed: '#f44336',
    colorBlue: '#2196f3',
    colorPrimaryText: '#212121',
    colorSecondaryText: '#757575',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>,
);
