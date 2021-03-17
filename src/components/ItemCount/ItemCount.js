import React, { useState } from "react";

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
                    <div>
                        <button onClick={() => setCounter(counter > initial ? counter - 1 : counter)}>-</button>
                        <label>{counter}</label>
                        <button onClick={() => setCounter(counter < stock ? counter + 1 : counter)}>+</button>
                    </div>
                    : 
                    <label>No hay stock</label>
                }
                <button disabled={!stock} onClick={() => addToCart()}>Add to cart</button>
            </div>
        </>
    )

}


export default ItemCount;




