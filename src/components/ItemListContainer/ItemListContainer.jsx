import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productItems from '../../productItems.json';
import ItemList from '../ItemList/ItemList';

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
            }, 1000);
        }).then(resolve => {setItems(resolve)})
    }, [id])

    return (
        <div className="container">
            <ItemList items= {items}/>
        </div>
    );
};

 export default ItemListContainer;
