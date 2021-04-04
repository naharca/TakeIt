import { useState } from "react";
import CartContext from "./CartContext";


const CartProvider = ({ defaultValue = [], children }) =>{
  
    const [cart, setCart] = useState(defaultValue);
    console.log(cart)
  
    const addItem = ( item, quantity ) => {
        let adding = isInCart(item.id);
        if (adding >= 0){
            let updatedCart = cart;
            updatedCart[adding] = {item, quantity: updatedCart[adding].quantity};
            setCart(updatedCart)
        } else { 
       
        setCart([
            ...cart, 
            { item, quantity }
        ]);
    } 

    };
    const removeItem = (adding) => {
        let updatedCart = cart;
        updatedCart.splice(adding, 1);
        setCart(updatedCart);
        
        console.log(`Se ha quitado el producto con id ${adding}`);
    };
    const clear = () => {
        setCart([]);

        console.log('Se limpio el carrito. Ahora no hay productos.');
    };

    const isInCart = (id) =>{
        const cartLength = cart.length;
        if(cartLength === 0){
            return -1;
        } else {
            for (let i = 0; i < cartLength; i++){
                if (cart[i].item.id === id){
                    return i;
                }
            }
        }
        
        console.log('Estamos buscando el producto')
    };
  
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart}} >
            { children }
        </CartContext.Provider>
    );
};
export default CartProvider;