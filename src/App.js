import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCountContainer from './containers/ItemCountContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer greeting='Are you ready to shop?'/>
      <ItemCountContainer />
     </div>

  );
}

export default App;
