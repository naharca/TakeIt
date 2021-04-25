import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const initial = 1;
  const [itemsQty, setItemsQty] = useState(initial);

  const { cart, addItem } = useContext(CartContext);

  const addToCart = () => {
    console.log(`added to cart: ${itemsQty} items of the product ${item.id}`);
    item.stock -= itemsQty;
    setItemsQty(initial);

    addItem(item, itemsQty);
  };

  const onAdd = (e) => {
    e.preventDefault();
    setItemsQty(itemsQty < item.stock ? itemsQty + 1 : itemsQty);
  };

  const onSubstract = (e) => {
    e.preventDefault();
    setItemsQty(itemsQty > initial ? itemsQty - 1 : itemsQty);
  };

  return (
    <div className="item" id={item.id}>
      <h5 className="product-name">{item.name}</h5>
      <img className="item-picture" src={item.picture} alt={item.name} />
      <ItemCount
        stock={item.stock}
        value={itemsQty}
        onAdd={onAdd}
        onSubstract={onSubstract}
      />
      <button
        type="button"
        className="btn btn-primary btn-md shadow-lg"
        hidden={!item.stock}
        onClick={() => addToCart()}
      >
        Add to cart
      </button>

      <div className="card-body">
        <div className="product-description">
          <p> Type : {item.Type}</p>
          <p> RAM : {item.ram}</p>
          <p> Core : {item.core}</p>
          <p> Screen :{item.screen_size}</p>
          <p> Stock :{item.stock}</p>

          <p className="price">Price: {item.price_USD}$</p>
        </div>
      </div>
      {cart.length > 0 && (
        <Link
          to="/cart"
          className="btn btn-primary btn-md"
          hidden={!item.stock}
        >
          Complete the purchase
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
