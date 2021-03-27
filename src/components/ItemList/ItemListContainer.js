import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productItems from '../../productItems.json';
import ItemList from './ItemList';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        

        new Promise((resolve, reject) =>{

            setTimeout(() =>{
                if (id) {
                    resolve (productItems.filter(prod => prod.Type === id));

                } else {
                    resolve (productItems);
                }
            }, 2000);
        }).then(resolve => {setItems(resolve)})
    }, [id])

    return (
        <div className="container">
            <h2>holaassasas</h2>
            <hr/>
            <ItemList items= {items}/>
            
        </div>
    );
};

 export default ItemListContainer;
