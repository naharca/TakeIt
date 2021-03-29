import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import productItems from '../../productItems.json';

const ItemDetailContainer = () => {
    const [item, setItem]= useState({});
    let { id } = useParams();

    const [ product ] = productItems.filter( item => item.id === id );

    useEffect(() => {
            new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            }, 0.000);

        }).then((result) => setItem(result))
   }, [product, id]);

    return <ItemDetail item={ item } />
}

export default ItemDetailContainer;