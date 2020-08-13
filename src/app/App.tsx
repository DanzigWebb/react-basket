import React from 'react';
import './App.scss';

import { Navbar, Sidebar } from './template';
import { ProductWrapper } from './products/ProductWrapper';
import { BasketRef } from './basket/component/BasketRef';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <ProductWrapper/>
      </main>
      <Sidebar>
        <BasketRef/>
      </Sidebar>
    </div>
  );
}

export default App;
