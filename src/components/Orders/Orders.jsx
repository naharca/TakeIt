import { useState, useEffect } from "react";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import "../Orders/Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const db = getFirestore();

  const getAll = () => {
    const itemsCollection = db.collection("orders");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No orders yet");
        }
        let snapshot = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setOrders(snapshot);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        console.log("Orders Loaded");
      });
  };

  function formatDate(dateFirestore) {
    let timestamp =
      dateFirestore.seconds * 1000 + dateFirestore.nanoseconds / 1000000;
    let dateObj = new Date(timestamp);
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getUTCFullYear();
    let fullDate = `${date}/${month}/${year}`;
    return fullDate;
  }
  function deleteOrder(id) {
    const order = db.collection("orders").doc(id);
    order.delete();
    let updatedOrders = orders.filter((order) => {
      return id !== order.id;
    });
    setOrders(updatedOrders);
  }
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {orders.length === 0 ? (
        <h2 className="appear"> No orders yet</h2>
      ) : (
        <div className="orders appear">
          <div className="orders-title"><h1>ORDER LIST</h1></div>
          {orders.map((order) => {
            return (
              <ul className="order-data" key={order.id}>
                <button
                  onClick={() => {
                    deleteOrder(order.id);
                  }}
                  className="order-delete"
                >
                  <img src={deleteIcon} className="btn delete-icon-btn " alt="" />
                </button>
                <h4>YOUR ORDER</h4>
                <p className="order__id">({order.id}) </p>
                <ul className="order__buyer">
                  <li>
                    <b>Name: </b> {order.buyer.name}
                  </li>
                  <li>
                    <b>Phone: </b> {order.buyer.phone}
                  </li>
                  <li>
                    <b>Email: </b> {order.buyer.email}
                  </li>
                  <li>
                    <b>Date: </b> {formatDate(order.date)}
                  </li>
                </ul>
                <li className="order__head">
                  <span>Title</span>
                  <span>Qty</span>
                  <span>Pr </span>
                  <span>Subtotal:</span>
                </li>
                {order.items.map(({ item, quantity }) => {
                  return (
                    <li className="order__item" key={item}>
                      <span> {item.name} </span>
                      <span> {quantity}</span>
                      <span> $ {item.price_USD} </span>
                      <span> $ {item.price_USD * quantity}</span>
                    </li>
                  );
                })}
                <li className="order-total">
                  <span>Total: </span> <span> $ {order.total} </span>{" "}
                </li>
              </ul>
            );
          })}
          <div className="container">
          <Link to="/cart" className="btn btn-primary">
            <span className="back-link__text">BACK TO THE CART</span>
          </Link>

          <button className={`btn btn-primary ${orders.length > 0 ? "" : "disabled"}`}>
            {" "}
            PAY MY ORDERS{" "}
          </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Orders;
