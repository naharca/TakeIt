import React from "react";
import { useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import returnIcon from "../../assets/icons/returnIcon.png";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import ItemCount from "../ItemCount/ItemCount";
import "./Cart.css";

function Cart() {
  const context = useContext(CartContext);

  const onAdd = (item, quantity) => {
    context.addItem(item, quantity);
  };

  const onSubstract = (item, quantity) => {
    context.removeItem(item, quantity);
  };
  

  return (
    <div>
      <div className="appear" hidden={context.cart.length !== 0}>
        <h1>Go and pick something</h1>
        <div className="shop">
          <Link to="/" className="return-link">
            <img src={returnIcon} className="retun-icon" alt="return arrow" />
            <button className="retun-link-text btn btn-primary ">
              {" "}
              GO BACK
            </button>
          </Link>
        </div>
      </div>

      <div className="cart " hidden={context.cart.length === 0}>
        <div className="cart-header">
          <h3 className="cart-title">YOUR SELECTION</h3>{" "}
        </div>
        <div>
          {context.cart.map((item) => {
            console.log(item.quantity);
            console.log(item.stock);
            return (
              <li key={item.id} className="item">
                <img
                  src={item.picture}
                  alt={item.Type}
                  className="item-picture"
                />
                <div className="item">
                  <h3 className="item-type">{item.Type}</h3>
                  <div className="cart-item-actions">
                    <ItemCount
                      min={0}
                      stock={item.stock}
                      value={item.quantity}
                      onAdd={() => {
                        onAdd(item, 1);
                      }}
                      onSubstract={() => {
                        onSubstract(item,  0);
                      }}
                      className="cart-input-number"
                    />
                    <button
                      onClick={() => {
                        context.removeItem(item.id);
                      }}
                      className="btn delete-icon-btn"
                    >
                      <img
                        src={deleteIcon}
                        className="delete-icon"
                        alt="delete"
                      />
                    </button>
                    <p>Price: ${item.price_USD}</p>
                    <p>Subtotal: ${item.price_USD * item.quantity}</p>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="total">
            <span>Total</span>
          </div>
        </div>
        <div className="final-buttons">
          <Link to="/" className="return-link">
            <img src={returnIcon} className="retun-icon" alt="return arrow" />
            <button className="retun-link-text btn btn-primary ">
              {" "}
              GO BACK
            </button>
          </Link>

          <button
            className="cart-clear btn btn-primary"
            onClick={() => {
              context.clear();
            }}
          >
            DELETE ALL
          </button>
          <Link
            to="/"
            className={`btn btn-primary ${
              context.cart.length === 0 ? "disabled" : ""
            }`}
          >
            CHECKOUT{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Cart;
