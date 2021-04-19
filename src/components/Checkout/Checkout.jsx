import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase";

function Checkout(props) {
  const context = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = () => {
    const db = getFirestore();

    let items = context.cart.map((item, quantity) => {
      return {
        id: item.id,
        title: item.Type,
        quantity: quantity,
        price: item.price_USD,
      };
    });

    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: context.Total,
    };

    const orders = db.collection("orders");
    orders
      .add(newOrder)
      .then((resp) => {
        console.log("Order created");

        let batch = db.batch();

        let itemsRef = db.collection("items");
        context.cart.forEach((item) => {
          batch.update(itemsRef.doc(item.id), { stock: item.stock });
        });

        batch.commit().then(() => {
          context.clear();
          setBuyer({ name: "", phone: "", email: "" });
        });
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  return (
    <div>
        <div className="container">
          <Link to="/cart" className="back-link">
            <span className="btn btn-primary ">Back to the cart </span>
          </Link>
        </div>
      <div className="checkout appear" hidden={context.cart.length === 0}>
        <div className="checkout__title">BILLING ADDRESS</div>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          id="name"
          placeholder=" "
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="phone"
          onChange={handleInputChange}
          id="tel"
          placeholder=" "
        />
        <label htmlFor="tel">Phone</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          id="email"
          placeholder=" "
        />
        <label htmlFor="email">Email</label>

        <div className="checkout__title">REVIEW YOUR ORDER</div>
        <ul className="checkout-order">
          <li className="checkout-order__head">
            <span>Title</span>
            <span>Qty</span>
            <span>Price </span>
            <span>Subtotal:</span>
          </li>
          {context.cart.map(({ item, id, price_USD, Type, quantity }) => {
            return (
              <li className="checkout-order__item" key={id}>
                <span> {item.name} </span>
                <span> {quantity}</span>
                <span> $ {item.price_USD} </span>
                <span> $ {item.price_USD * quantity}</span>
              </li>
            );
          })}
          <li className="checkout-order__total">
            <span>Total: </span> <span> $ {context.total}</span>{" "}
          </li>
        </ul>
        <Link
          to="/orders"
          className={`btn--big ${
            context.cart.length > 0 &&
            buyer.name !== "" &&
            buyer.phone !== "" &&
            buyer.email !== ""
              ? ""
              : "disabled"
          }`}
          onClick={createOrder}
        >
          <button className="btn btn-primary">PLACE ORDER NOW</button>
        </Link>
        
      </div>
    </div>
  );
}

export default Checkout;
