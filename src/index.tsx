import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initFacebookSdk } from './helpers';
import './index.css';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
      backgroundColor: 'black'
    },
  },
};

initFacebookSdk().then(startApp);

function startApp() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Grommet theme={theme}>
          <App />
        </Grommet>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
