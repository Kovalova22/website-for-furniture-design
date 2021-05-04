import React from 'react';
import './App.scss';
import Header from './components/header/header';
import MainPicture from './components/main/main-picture/main-picture';
import MainText from './components/main/main-text/main-text';

function App() {
  return (
    <div className="App">
      <Header />
      <MainText />
      <MainPicture />
    </div>
  );
}

export default App;
