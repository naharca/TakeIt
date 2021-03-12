import React, { useState } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';


const ItemCountContainer = () => {
    const [actualStock, setActualStock] = useState(10);

    const substractStock = (e,newStock) => {
        e.preventDefault();
        setActualStock ((actualStock) => actualStock - newStock);
         
    };

    
    return (
        <div className="App">
            <ItemCount stock={actualStock}  initial={1} onAdd={substractStock}/>

        </div>
    );
};

 export default ItemCountContainer;