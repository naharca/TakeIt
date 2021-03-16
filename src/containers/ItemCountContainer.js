import React, {  useState } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';


const ItemCountContainer = () => {
    const [actualStock, setActualStock] = useState(5);

    const substractStock = (e,newStock) => {
        e.preventDefault();
        setActualStock ((actualStock) => actualStock - newStock);
         
    };

    
    return (
        <div className="CounterContainer">
            <ItemCount stock={actualStock}  initial={1} onAdd={substractStock}/>

        </div>
    );
};

 export default ItemCountContainer;

