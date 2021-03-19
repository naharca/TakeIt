import React, { useState } from "react";
import "../ItemCount/ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const addToCart = () => {
        onAdd(counter);
        setCounter(initial);
    }
    return (
        <>
            <div>
                <h2>Stock: {stock}</h2>
                {stock
                    ?
                    <div className="counter-buttons-container">
                        <button type="button" className="btn btn-operator btn-secondary btn-sm" onClick={() => setCounter(counter > initial ? counter - 1 : counter)}> - </button>
                        <label>{counter}</label>
                        <button type="button" className="btn btn-operator btn-secondary btn-sm" onClick={() => setCounter(counter < stock ? counter + 1 : counter)}> + </button>
                    </div>
                    :
                    <div class="alert alert-info" role="alert">
                        OOPS! We are sorry... <a href="#" class="alert-link">######</a>. We run out of stock for this product.  </div>
                }
                <button type="button" className="btn btn-primary btn-md" disabled={!stock} onClick={() => addToCart()}>Add to cart</button>
            </div>
        </>
    )

}


export default ItemCount;




