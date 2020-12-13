import React from 'react';
import './styles/index.scss';
import { Circle } from './components/Circle';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Circle data={[1, 2, 3]} />
      <Main />
    </div>
  );
}

export default App;
