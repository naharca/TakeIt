const ItemCount = ({ stock, initial, onAdd }) => {
    return (
        <form>
            Stock: {stock}
            <br />
            <input id='quantity' type="number" placeholder={initial}></input>
            <br />
            <button onClick={(e) => onAdd(e, 1)}> ADD TO CART</button>

        </form>

    );

};

export default ItemCount;