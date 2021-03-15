import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCountContainer from './containers/ItemCountContainer';
import { useEffect, useState } from "react";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((okay, bad) => {
      setTimeout(() => {
        okay(["Model","Description","Brand","Price"]);
      }, 2000);

    }).then((result) => setItems(result))

  });

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer   items={items}/>
      <ItemCountContainer />
    </div>

  );
}

export default App;
