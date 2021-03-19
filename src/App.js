import { useEffect, useState } from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import productItems from './productItems.json';

function App() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productItems);
      }, 1000);

    }).then((result) => setItems(result))

  });

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer items={items} />
      <ItemDetailContainer />
     
    </div>

  );
}

export default App;
