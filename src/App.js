import './App.css';
import RouterApp from './Routes/RouterApp';
import CartContext from './Context/CartContext'
import { useState } from 'react';

function App() {
  const [item, setItem]= useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{item, setItem}}>
      <RouterApp />
      </CartContext.Provider>
    </div>
  );
}

export default App;
