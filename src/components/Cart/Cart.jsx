import React from "react";
import {useContext} from 'react';
import { Link } from "react-router-dom";
import CartContext from '../../Context/CartContext';
import returnIcon from "../../assets/icons/returnIcon.png";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import ItemCount from "../ItemCount/ItemCount";


function Cart ()  {
  const context = useContext(CartContext);

  const onAdd = (e, item, quantity) => {
    context.addItem(e, item, quantity);
  };

  const onSubstract = (e, item, quantity) => {
    context.substractItem(e, item, quantity);
  };

  return (
    <div>
      <div className="shop">
        <Link to="/" className="return-link">
          <img src= {returnIcon} className="retun-icon" alt="return arrow" />
          <span className="retun-link-text">BACK</span>
        </Link>
      </div>
      <div className="appear" hidden={context.cart.length !== 0}>
        <h1>Go and pick something</h1>
      </div>
      <div className="cart appear" hidden={context.cart.length === 0}>
        <div className="cart-header">
          <span className="cart-title">YOUR ITEMS</span>{" "}
          <button
            onClick={() => {
              context.clear();
            }}
            className="cart-clear btn btn-primary"
          >
            DELETE ALL
          </button>
        </div>
        <div>
          {context.cart.map((item, pos) => {
            return (
              <li key={item.id} className="cart-item">
                <img
                  src= {item.picture}
                  alt={item.Type}
                  className="cart-item-img"
                />
                <div className="item-description">
                  <h3 className="item-type">{item.Type}</h3>
                  <div className="cart-item-actions">
                    <span>Qty:</span>
                    <ItemCount 
                      min="0"
                      max={item.stock}
                      value={item.quantity}
                      onAdd={(e) => {
                        onAdd(e, item, 1);
                      }}
                      onSubstract={(e) => {
                        onSubstract(e, item, 1);
                      }}
                      className="cart-input-number"
                    />
                    <span className="price">Price: ${item.price_USD}</span>
                    <span>Subtotal: ${item.price_USD * item.quantity}</span>
                    <button
                      onClick={() => {
                        context.removeItem(pos);
                      }}
                      className="cart-item-remove"
                    >
                      <img src={deleteIcon} className="delete-icon" alt="delete button" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="total"><span>Total</span></div>
        </div>
        <Link to="/" className={`btn btn-primary ${context.cart.length === 0 ? 'disabled' : ''}`}>CHECKOUT </Link>
      </div>
    </div>
  );
}
export default Cart;
