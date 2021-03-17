import React, {useState} from 'react';
import "../ItemListContainer/ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList'

  
  
const ItemListContainer = (props) => {
  

    const [actualStock, setActualStock] = useState(5);

    const changeStock = (newStock) => {
       
        if (newStock <= actualStock){
            setActualStock (actualStock => actualStock - newStock);
        }
        else{
            alert('Sorry, the quantity its not available');

            

        }
        
         
    }

    
    return (
        <>
        <div className="CounterContainer">
        <h3>
                {props.items ? '' : props.greeting}
            </h3>
            <ItemList items={props.items} />
            <ItemCount stock={actualStock}  initial={1} onAdd={changeStock} />

        </div>
        </>
    )
}

 export default ItemListContainer;






















