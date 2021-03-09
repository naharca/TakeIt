import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer greeting='Are you ready to shop?'/>
     </div>

  );
}

export default App;
