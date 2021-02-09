import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initFacebookSdk } from './helpers';
import './styles/index.scss'

import Store from './store'

initFacebookSdk().then(startApp);

function startApp() {
  ReactDOM.render(
    <Store>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Store>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
