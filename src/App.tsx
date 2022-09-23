import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConsentManager } from '@segment/consent-manager';

function App() {
  return (
    <div className="App">
      <ConsentManager
        writeKey=""
        bannerContent={''}
        cancelDialogContent={''}
        preferencesDialogContent={''}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
