import React from 'react';
import './App.css';
import Articles from './Articles';

const App = () => (
  <React.Fragment>
    <header className="header"><h1>Latest News</h1></header>
    <div className={'mainContent'}><Articles /></div>
  </React.Fragment>
);

export default App;