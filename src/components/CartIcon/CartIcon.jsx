import useContext from 'react';
import CartContext from '../../Context/CartContext';


export default function cartIcon() {
    const Context = useContext(CartContext);

    return <div>{Context.products.length}</div>
}