import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';
import productItems from '../../productItems.json';
import Itemdetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = (props) => {
    const [item, setItem]= useState({})

    useEffect(() => {


        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([ productItems.filter( item => item.id === 'product-1' ) ]);
            }, 2000);

        }).then((result) => setItem(result))
        

    }, []);

    

   

}

export default ItemDetailContainer;