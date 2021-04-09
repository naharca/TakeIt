import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import productItems from "../productItems.json";
import Home from "../components/Home/Home";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";

const RouterApp = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productItems);
      }, 0.0);
    }).then((result) => setItems(result));
  });

  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer items={items} />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
            <ItemListContainer items={items} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default RouterApp;
