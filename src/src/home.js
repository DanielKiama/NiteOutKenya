import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import  Header from "./components/header.js" 
import  Banner from "./components/banner.js" 
import WhatWeDo from './components/whatwedo';
import BestOfKenya from './components/bestOfKenya';
function App() {
  return (
    <div className="App">
      <Header/>
    <Banner/>
    <WhatWeDo/>
    <BestOfKenya/>
    </div>
  );
}

export default App;
