import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="header" alt="pic" src={require('../src/images/4.png')} />
      <img
        className="title"
        alt="pic"
        src={require('../src/images/title.png')}
      />
      <a href="http://www-svipky.com/">點擊進入官網</a>
      <img className="footer" alt="pic" src={require('../src/images/2.png')} />
    </div>
  );
}

export default App;
