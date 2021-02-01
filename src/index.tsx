import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initFacebookSdk } from './helpers';
import './index.css';
import { Grommet } from 'grommet';
import Store from './store'

const theme = {
  themeMode: 'dark',
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
      backgroundColor: 'black'
    },
  },
  card: {
    container: {
      background: '#FFFFFF12',
      elevation: 'none',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF06',
    },
  },
};

initFacebookSdk().then(startApp);




function startApp() {
  ReactDOM.render(
    <Store>
      <BrowserRouter>
        <Grommet theme={theme}>
          <App />
        </Grommet>
      </BrowserRouter>
    </Store>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
