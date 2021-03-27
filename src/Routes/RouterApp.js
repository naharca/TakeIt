import {useState, useEffect} from 'react';
import
 {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemCounterContainer';
import NavBar from '../components/NavBar/NavBar';
import productItems from '../productItems.json';
import Home from '../components/Home/Home';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const RouterApp = () => {

    const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productItems);
      }, 0.000);

    }).then((result) => setItems(result))

  });

    return (
        <Router>
        <div>
            <NavBar />
            <Home />
            {/* <ItemDetailContainer /> */}

            <Switch>
                <Route path="/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route path="/category/:id">
                    <ItemListContainer items={items} />
                </Route>
                <Route path="/">
                    <ItemListContainer items={items} />
                </Route>
            </Switch>

        </div>
        </Router>
    )
}

export default RouterApp;

