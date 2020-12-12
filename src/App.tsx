import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Circle } from './components/Circle';

function App() {
  return (
    <div className="App">
      <Circle data={[1,2,3]}/>
    </div>
  );
}

export default App;
