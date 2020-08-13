import React from 'react';
import './App.scss';

import { Navbar, Sidebar } from './template';
import { ProductWrapper } from './products/ProductWrapper';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <ProductWrapper/>
      </main>
      <Sidebar>
        Пока покупок никаких нет
      </Sidebar>
    </div>
  );
}

export default App;
