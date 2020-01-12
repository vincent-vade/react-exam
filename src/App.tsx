import * as React from 'react';

import Jedi from './components/Jedi';

import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <Jedi />
    </div>
  );
};

export default App;
