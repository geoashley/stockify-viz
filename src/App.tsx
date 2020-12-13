import React from 'react';
import './styles/index.scss';
import { Bubble } from './components/Bubble';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Bubble data={[1, 2, 3]} />
      <Main />
    </div>
  );
}

export default App;
