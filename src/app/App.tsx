import React from 'react';
import './App.css';
import { Navbar } from './template/navbar';
import { ProductWrapper } from './products/ProductWrapper';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductWrapper/>
    </div>
  );
}

export default App;
