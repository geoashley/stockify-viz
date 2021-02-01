import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Circle } from './components/Circle';
import Main from './pages/Main';
import Login from './pages/Login';
import Error from './pages/Error';
import './styles/index.scss';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
